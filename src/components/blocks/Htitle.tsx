import * as React from "react";
import * as Draft from "draft-js";
import EditorState = Draft.EditorState

interface HTitleProps {
    editorState: EditorState;
    children: React.ReactNode;
    'data-offset-key': string
}

export default function HTitle(props: HTitleProps) {
    let contentState = props.editorState.getCurrentContent();
    const [blockKey] = props['data-offset-key'].split('-');
    let block = contentState.getBlockForKey(blockKey);
    let text = block.getText();
    return <div>
        <a id={text}/>
        {props.children}
    </div>
}


