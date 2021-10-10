import * as React from 'react';
import {ContentBlock, ContentState} from 'draft-js';

interface Props {
  block?: ContentBlock,
  contentState?: ContentState
}

function MindMap(props: Props) {
  return <div>思维导图组件暂不支持查看，请前往编辑页查看</div>
}

export default MindMap
