import React, {Component} from 'react';
import {EditorState, convertFromRaw} from 'draft-js';
import ReadonlyCellEditor from '../../CellEditor';
import SplitPane from 'react-split-pane'

class MySplitPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const entityData = entity.getData();

    const loop = (key) => {
      let curItem = entityData.itemMap[key];

      if (curItem.split === 'leaf') {
        let raw = entityData.contentMap[key];
        let editorState;
        if (!raw) {
          editorState = EditorState.createEmpty();
        } else {
          editorState = EditorState.createWithContent(convertFromRaw(raw));
        }
        return (<div style={{height: "100%", width: "100%"}}>
          <ReadonlyCellEditor editorState={editorState}/>
        </div>)
      } else {
        let defaultSize = "50%";
        if (curItem.size) {
          defaultSize = curItem.size;
        }
        return (
          <div>
            <SplitPane
              split={curItem.split}
              defaultSize={defaultSize}
              minSize={50}
              className="primary"
              allowResize={false}
            >
              {
                entityData.childMap[curItem.key].map((childKey) => {
                  return (loop(childKey));
                })
              }
            </SplitPane>
          </div>
        )
      }
    };
    const panes = loop("root");
    let height = entityData.height;
    return (
      <div className="react-split-pane" style={{border: "1px dashed #e9e9e9"}}>
        <div className="parent" style={{height: height, minHeight: 300, position: "relative"}}>
          {panes}
        </div>
      </div>
    );
  }
}

export default MySplitPane
