import * as React from "react";
import {EditorState} from "draft-js";

export interface CodeProps {
  children?: React.ReactNode;
  editorState: EditorState;
}

export default function Code(props: CodeProps) {
  return <div style={{background: "#ebeef5", padding: "1rem"}}>
    {props.children}
  </div>
}
