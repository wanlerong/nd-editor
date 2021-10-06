import {DefaultDraftBlockRenderMap} from 'draft-js';
import Immutable from 'immutable';
import HTitle from "../../components/blocks/Htitle";
import Code from "./Code";
import Info from './Info';
import React from "react";

export default function getBlockRenderMap(props) {
  const blockRenderMap = Immutable.Map({
    'header-one': {
      element: 'h1',
      wrapper: <HTitle {...props}/>,
    },
    'header-two': {
      element: 'h2',
      wrapper: <HTitle {...props}/>,
    },
    'header-three': {
      element: 'h3',
      wrapper: <HTitle {...props}/>,
    },
    'header-four': {
      element: 'h4',
      wrapper: <HTitle {...props}/>,
    },
    'header-five': {
      element: 'h5',
      wrapper: <HTitle {...props}/>,
    },
    'header-six': {
      element: 'h6',
      wrapper: <HTitle {...props}/>,
    },
    'code-block': {
      element: 'pre',
      wrapper: <Code {...props} />,
    },
    'info': {
      element: 'pre',
      wrapper: <Info {...props} />,
    },
    'todoItem': {
      element: 'li',
      wrapper: <ul className='public-DraftStyleDefault-ul public-DraftStyleDefault-ul-todolist'/>,
    },
    'atomic': {
      element: 'figure',
      aliasedElements: ['img'],
    },
  });

  return DefaultDraftBlockRenderMap.merge(blockRenderMap);
}
