import React, {Component} from 'react';
import {Player} from 'video-react';

class MyVideo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {src, width} = entity.getData();

    return (
      <div style={{width: width}}>
        <Player>
          <source src={src}/>
        </Player>
      </div>
    );
  }
}

export default MyVideo
