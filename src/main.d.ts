import {ContentBlock} from "draft-js";

declare namespace NdpEditor {
  namespace Constants {
    const styleMap: any

    function blockStyleFn(block: ContentBlock): string;

    function blockStyleViewFn(block: ContentBlock): string;
  }
}

import Constants = NdpEditor.Constants

export {
  Constants
}