import React, {Component} from 'react';
import {getSrcFromEntity} from "./getSrcFromEntity";

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback,
  );
}

function getLinkComponent(config) {
  return class Link extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {children, entityKey, contentState} = this.props;
      let src = getSrcFromEntity(contentState.getEntity(entityKey).getData());
      return (
        <a href={src} style={{zIndex: 10, color: "#108ee9"}} target="__blank">{children}</a>
      );
    }
  };
}

export default config => ({
  strategy: findLinkEntities,
  component: getLinkComponent(config),
});
