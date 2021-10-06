import React, {Component} from 'react';
let Prism = require('prismjs');
import './PrismImportHelper';

/**
 * 策略，找出需要装饰的字符range
 * @param contentBlock
 * @param callback
 * @param contentState
 */
let map = {};

function buildMap(contentState) {
  let blockMap = contentState.getBlockMap();
  let inArea = false;
  let areaKey = '';
  blockMap.map(block => {
    if (block.getType() !== 'code-block') {
      inArea = false;
      areaKey = '';
      return false;
    }
    if (!inArea) {
      areaKey = block.getKey();
      map[block.getKey()] = areaKey;
      inArea = true;
      return false;
    }
    map[block.getKey()] = areaKey;
  });
}

function findHighLight(contentBlock, callback, contentState) {
  if (contentBlock.getType() === 'code-block') {
    let tokens, token, offset = 0;
    const text = contentBlock.getText();

    buildMap(contentState);
    if (!map[contentBlock.getKey()]) {
      return;
    }

    let areaBlock = contentState.getBlockForKey(map[contentBlock.getKey()]);
    if (!areaBlock) {
      return;
    }
    let language = areaBlock.getData().get('language');
    if (!language) {
      return;
    }

    let grammar = Prism.languages[language];
    tokens = Prism.tokenize(text, grammar);

    for (var i = 0; i < tokens.length; i++) {
      token = tokens[i];

      if (typeof token === 'string') {
        // 普通的文字无需修饰
        offset += token.length;
      } else {

        if (typeof token.content === 'string') {
          callback(offset, offset + token.content.length);
          offset += token.content.length;
        }

        if (typeof token.content === 'object') {
          token.content.map((str) => {
            callback(offset, offset + str.length);
            offset += str.length;
          })
        }

      }
    }
  }
}

function getCodeComponent(config) {
  return class Code extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {contentState, children, decoratedText} = this.props;
      const [blockKey] = this.props['offsetKey'].split('-');
      let areaBlock = contentState.getBlockForKey(map[blockKey]);
      if (!areaBlock) {
        return <span className={"prism-token token"}>
           {children}
         </span>
      }
      let language = areaBlock.getData().get('language');

      if (!language) {
        return <span className={"prism-token token"}>
          {children}
        </span>
      }

      var grammar = Prism.languages[language];
      let tokens = Prism.tokenize(decoratedText, grammar);
      let type = tokens[0].type;

      return (
        <span className={"prism-token token " + type}>
          {children}
        </span>
      );
    }
  };
}

export default config => ({
  strategy: findHighLight,
  component: getCodeComponent(config),
});
