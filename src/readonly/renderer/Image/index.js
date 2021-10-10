import React, {Component} from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    let {src, width} = entity.getData();

    return <div><img src={src} width={width}/></div>
  }
}

export default Image
