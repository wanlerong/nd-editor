import React, {Component} from 'react';
import {Table} from 'antd';
import {EditorState, convertFromRaw} from 'draft-js';
import ReadonlyCellEditor from '../../CellEditor';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.columnRender = this.columnRender.bind(this);
  }

  columnRender(i, mergeStatuses) {
    return (text, record, rIndex) => {
      let obj;
      let rdEditorState;
      if (!text) {
        rdEditorState = EditorState.createEmpty();
      } else {
        rdEditorState = EditorState.createWithContent(convertFromRaw(text));
      }
      obj = {
        children: <ReadonlyCellEditor editorState={rdEditorState}/>
      };

      mergeStatuses.map(mergeStatus => {
        let diffR = mergeStatus.max.r - mergeStatus.min.r;
        let diffC = mergeStatus.max.c - mergeStatus.min.c;

        if ((rIndex <= mergeStatus.max.r && rIndex >= mergeStatus.min.r) &&
          (i <= mergeStatus.max.c && i >= mergeStatus.min.c)
        ) {
          if (rIndex === mergeStatus.min.r && i === mergeStatus.min.c) {
            obj.props = {
              rowSpan: 1 + diffR,
              colSpan: 1 + diffC,
            };
          } else {
            obj.props = {
              rowSpan: 0,
              colSpan: 0,
            };
          }
        }
      });
      return obj;
    }
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    let {columns, dataSource, mergeStatuses} = entity.getData();

    if (!mergeStatuses) {
      mergeStatuses = []
    }
    for (let i = 0; i < columns.length; i++) {
      columns[i].render = this.columnRender(i, mergeStatuses)
    }

    return (
      <div>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          showHeader={false}
          size="small"
        />
      </div>
    );
  }
}

export default MyTable
