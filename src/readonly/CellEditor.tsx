import * as React from 'react';
import {EditorState, Editor, DefaultDraftBlockRenderMap} from 'draft-js';
import getBlockRenderFunc from './renderer/readonlyIndex';
import getCompositeDecorator from './decorators/getComDecorator';
import Info from './block/Info';
import * as Immutable from 'immutable';
import './decorators/Code/PrismImportHelper';
import Code from "./block/Code";
import {Constants} from "../index";

export interface ReadonlyCellEditorProps {
  editorState?: EditorState;
}

function ReadonlyCellEditor(props: ReadonlyCellEditorProps) {

  let {editorState} = props;
  editorState = EditorState.createWithContent(editorState.getCurrentContent(), getCompositeDecorator({}));
  const blockRenderMap = Immutable.Map({
    'code-block': {
      element: 'pre',
      wrapper: <Code editorState={editorState}/>,
    },
    'info': {
      element: 'pre',
      wrapper: <Info editorState={editorState}/>,
    },
    'todoItem': {
      element: 'li',
      wrapper: {type: 'ul'},
    }
  });
  const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

  return (
    <Editor
      blockStyleFn={Constants.blockStyleFn}
      customStyleMap={Constants.styleMap}
      editorState={editorState}
      readOnly={true}
      blockRendererFn={getBlockRenderFunc({editorState})}
      blockRenderMap={extendedBlockRenderMap}
      onChange={() => {
      }}
    />
  );
}

export default ReadonlyCellEditor;
