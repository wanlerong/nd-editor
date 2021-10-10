import React, {Component} from 'react';

const Showdown = require('showdown');

class MarkDown extends Component {
  constructor(props) {
    super(props);
    Showdown.setOption('tables', true);
  }

  render() {
    const converter = new Showdown.Converter()
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {content} = entity.getData();
    let html = converter.makeHtml(content);

    return (
      <div className="MyMarkDown">
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    );
  }
}

export default MarkDown
