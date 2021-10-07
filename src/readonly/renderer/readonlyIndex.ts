import Card from './Card';
import Step from './Step';
import Tab from './Tab';
import {ContentBlock} from "draft-js";

const getBlockRenderFunc = (config: any) => (block: ContentBlock) => {
  if (block.getType() === 'atomic') {
    const contentState = config.editorState.getCurrentContent();
    if (!block.getEntityAt(0)) {
      return null;
    }
    const entity = contentState.getEntity(block.getEntityAt(0));
    if (!entity) {
      return null;
    }
    let commonProps = {
      editable: false,
      props: {}
    }

    if (entity && entity.type === 'CARD') {
      return {
        component: Card,
        ...commonProps,
      }
    } else if (entity && entity.type === 'STEP') {
      return {
        component: Step,
        ...commonProps,
      }
    } else if (entity && entity.type === 'TAB') {
      return {
        component: Tab,
        ...commonProps,
      }
    }
  }
  return undefined;
};

export default getBlockRenderFunc;
