import * as React from 'react';
import Alert from '@mui/material/Alert';
import {EditorState} from "draft-js";

export interface InfoProps {
  children?: React.ReactNode;
  editorState: EditorState;
  'data-offset-key': string
}

export default function Info(props: InfoProps) {
  let editorState = props.editorState
  const [blockKey] = props['data-offset-key'].split('-');
  let block = editorState.getCurrentContent().getBlockForKey(blockKey);
  let type = block.getData().get('type');
  type = type ? type : 'info';
  return <div><Alert severity={type}>
    {props.children}
  </Alert></div>
}
