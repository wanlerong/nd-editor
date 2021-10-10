import React, {Component} from 'react';
import {EditorBlock} from 'draft-js';
import NoSsr from '@mui/material/NoSsr';
import Checkbox from '@mui/material/Checkbox';

class MyTodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block, offsetKey} = this.props;
    let hasFinished = block.getData().get('hasFinished');

    return (
      <div data-offset-key={offsetKey} style={{position: "relative", paddingLeft: "28px"}}>
         <span contentEditable={false}
               style={{position: "absolute", top: "-8px", left: "-12px", zIndex: "2", width: "20px"}}
               href="javascript:void(0)">
             <NoSsr>
               <Checkbox checked={hasFinished} disabled/>
             </NoSsr>
         </span>
        <EditorBlock {...this.props} forceSelection={false}/>
      </div>
    );
  }
}

export default MyTodoItem;