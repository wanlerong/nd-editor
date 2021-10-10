import {ContentBlock} from "draft-js";
import Card from './Card';
import Step from './Step';
import Tab from './Tab';
import Hr from "./Hr";
import Collapse from "./Collapse";
import Chart from "./Chart";
import Image from "./Image";
import Video from "./Video";
import Graph from "./Graph";
import MarkDown from "./MarkDown";
import SplitPane from "./SplitPane";
import Question from "./Question";
import TodoItem from "./TodoItem";
import Attach from "./Attach";
import MindMap from "./MindMap";
import Table from "./Table";

function getComponent(component: any, props = {}, editable = false) {
  return {component, editable, props};
}

const getBlockRenderFunc = (config: any) => (block: ContentBlock) => {
  if (block.getType() === 'todoItem') {
    return {
      component: TodoItem,
      props: {}
    };
  }

  if (block.getType() === 'atomic') {
    const contentState = config.editorState.getCurrentContent();
    if (!block.getEntityAt(0)) {
      return null;
    }
    const entity = contentState.getEntity(block.getEntityAt(0));
    if (!entity) {
      return null;
    }
    switch (entity.type) {
      case 'CARD':
        return getComponent(Card)
      case 'STEP':
        return getComponent(Step)
      case 'TAB':
        return getComponent(Tab)
      case 'HR':
        return getComponent(Hr)
      case 'COLLAPSE':
        return getComponent(Collapse)
      case 'CHART':
        return getComponent(Chart)
      case 'IMAGE':
        return getComponent(Image)
      case 'VIDEO':
        return getComponent(Video)
      case 'GRAPH':
        return getComponent(Graph)
      case 'MARKDOWN':
        return getComponent(MarkDown)
      case 'SPLITPANE':
        return getComponent(SplitPane)
      case 'QUESTION':
        return getComponent(Question)
      case 'ATTACH':
        return getComponent(Attach, config.attachConfig)
      case 'MINDMAP':
        return getComponent(MindMap)
      case 'TABLE':
        return getComponent(Table)
      default:
        return null
    }
  }
  return null;
}

export default getBlockRenderFunc;
