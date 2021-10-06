import {ContentBlock} from "draft-js";
import * as Immutable from 'immutable';

declare namespace NdpEditor {
  namespace Constants {
    const styleMap: any

    function blockStyleFn(block: ContentBlock): string;

    function blockStyleViewFn(block: ContentBlock): string;
  }

  namespace Readonly {

    function getBlockRenderMap(props: any): Immutable.Map<any, any>

    function Code(prop: CodeProps): JSX.Element;

    function Info(prop: InfoProps): JSX.Element;

  }
}

import Constants = NdpEditor.Constants
import Readonly = NdpEditor.Readonly

import {CodeProps} from "./readonly/block/Code";
import {InfoProps} from "./readonly/block/Info";

export {
  Constants,
  Readonly
}