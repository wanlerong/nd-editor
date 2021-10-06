import React, {Component} from 'react';
import katex from 'katex';

class KatexOutput extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    katex.render(
      this.props.content,
      this.myRef.current,
      {displayMode: true},
    )
  }

  render() {
    return <span style={{display: "inline-block"}} ref={this.myRef} />;
  }
}

function findTexEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'TEX'
      );
    },
    callback,
  );
}

function getTexComponent(config) {
  return class Tex extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {children, entityKey, contentState} = this.props;
      const {value} = contentState.getEntity(entityKey).getData();

      return <span contentEditable={false} style={{cursor: "pointer"}}>
        <KatexOutput content={value}/>
        <span style={{fontSize: 0, opacity: 0}}>{children}</span>
      </span>
    }
  };
}

export default config => ({
  strategy: findTexEntities,
  component: getTexComponent(config),
});
