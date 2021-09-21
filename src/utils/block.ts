import {SelectionState, ContentState, Modifier, EditorState} from "draft-js"

const getBlockRange = (contentState: ContentState, blockKey: string) => {
    const block = contentState.getBlockForKey(blockKey)
    return new SelectionState({
        anchorKey: blockKey,
        anchorOffset: 0,
        focusKey: blockKey,
        focusOffset: block.getLength(),
        isBackward: false
    })
}

const removeBlock = (contentState: ContentState, blockKey: string) => {
    const blockRange = getBlockRange(contentState, blockKey)
    const contentWithResettedBlock = Modifier.setBlockType(
        contentState,
        blockRange,
        'unstyled'
    )

    return Modifier.removeRange(
        contentWithResettedBlock,
        blockRange,
        'backward'
    )
}

const getCurrentBlock = (editorState: EditorState) => {
    return editorState.getCurrentContent().getBlockForKey(
        editorState.getSelection().getStartKey()
    )
}

const getBlockMapKeys = (contentState: ContentState, startKey: string, endKey: string) => {
    const blockMapKeys = contentState.getBlockMap().keySeq()
    return blockMapKeys
        .skipUntil((key) => key === startKey)
        .takeUntil((key) => key === endKey)
        .concat([endKey])
}

const getSelectedBlocksMapKeys = (editorState: EditorState) => {
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    return getBlockMapKeys(contentState, selectionState.getStartKey(), selectionState.getEndKey());
}

const blockInSelection = (editorState: EditorState, blockKey: string) => {
    const selectedBlocksKeys = getSelectedBlocksMapKeys(editorState);
    return selectedBlocksKeys.includes(blockKey);
}

export {
    getBlockRange,
    removeBlock,
    getCurrentBlock,
    getBlockMapKeys,
    getSelectedBlocksMapKeys,
    blockInSelection
}