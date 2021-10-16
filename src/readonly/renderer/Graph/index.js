import React, {Component} from 'react';

class Graph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {id} = entity.getData();
    let src = "https://diagram.notedeep.com/viewer.html?id=" + id;

    return (
      <div>
        <iframe className="iframeND" src={src} frameBorder="0" allowFullScreen
                style={{width: "100%", minHeight: "400px"}}/>
      </div>
    );
  }
}

export default Graph
