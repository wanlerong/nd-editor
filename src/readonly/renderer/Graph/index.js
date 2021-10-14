import React, {Component} from 'react';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
  }

  resize() {
    setTimeout(() => {
      iFrameResize({log: false}, '.iframeND');
    }, 500)
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {id} = entity.getData();
    let src = "https://diagram.notedeep.com/viewer.html?id=" + id;

    return (
      <div>
        <iframe className="iframeND" src={src} frameBorder="0" allowFullScreen
                onLoad={this.resize} style={{width: "100%"}}/>
      </div>
    );
  }
}

export default Graph
