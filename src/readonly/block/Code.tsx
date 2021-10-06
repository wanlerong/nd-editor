import * as React from "react";

export interface CodeProps {
  children?: React.ReactNode;
}

export default function Code(props: CodeProps) {
  return <div style={{background: "#ebeef5", padding: "1rem"}}>
    {props.children}
  </div>
}
