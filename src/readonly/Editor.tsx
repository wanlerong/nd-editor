import * as React from "react";
import {Editor, EditorState} from "draft-js"
import * as Constants from "../constants"
import getBlockRenderFunc from "./renderer/readonlyIndex";
import getBlockRenderMap from "./block/getBlockRenderMap";

type AttachConfig = {
  beforeDownload: Function;
}

export type ReadonlyEditorProps = {
  editorState: EditorState;
  attachConfig?: AttachConfig;
}

const ReadonlyEditor = ({editorState, attachConfig}: ReadonlyEditorProps) => {
  return <Editor
    blockStyleFn={Constants.blockStyleFn}
    customStyleMap={Constants.styleMap}
    editorState={editorState}
    blockRenderMap={getBlockRenderMap({
      editorState: editorState
    })}
    blockRendererFn={getBlockRenderFunc({
      editorState: editorState,
      attachConfig: attachConfig
    })}
    spellCheck={true}
    readOnly={true}
    onChange={() => {
    }}
  />
}

export default ReadonlyEditor
