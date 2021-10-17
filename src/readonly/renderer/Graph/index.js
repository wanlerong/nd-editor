import React, {Component} from 'react';
import NoSsr from '@mui/material/NoSsr';

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
      <NoSsr>
        <iframe className="iframeND" src={src} frameBorder="0" allowFullScreen
                style={{width: "100%", minHeight: "400px"}}/>
      </NoSsr>
    );
  }
}

export default Graph
