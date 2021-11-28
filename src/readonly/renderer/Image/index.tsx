import * as React from 'react';
import ViewModal from "./ViewModal";
import {ContentBlock, ContentState} from "draft-js";
import {useState} from "react";

interface Props {
  block?: ContentBlock,
  contentState?: ContentState
}

function Image(props: Props) {
  const [open, setOpen] = useState(false)

  const {block, contentState} = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  let {src, width} = entity.getData();

  return <div>
    <img src={src} width={width} onDoubleClick={() => setOpen(true)}/>
    <ViewModal open={open} setOpen={setOpen} src={src}/>
  </div>
}


export default Image
