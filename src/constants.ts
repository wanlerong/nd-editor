// Custom overrides for "code" style.
import {ContentBlock} from "draft-js";

export const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
    HITEXT: {
        padding: "2px 4px",
        fontSize: "90%",
        color: "#c7254e",
        backgroundColor: "#f9f2f4",
        borderRadius: "4px",
    }
}

export const blockStyleFn = (block: ContentBlock) => {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}

export const blockStyleViewFn = (block: ContentBlock) => {
    switch (block.getData().get('diffType')) {
        case "deletion":
            return 'deletion';
        case "newtion":
            return 'newtion';
        case "modifion":
            return 'modifion';
        default:
            break;
    }

    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return null;
    }
}
