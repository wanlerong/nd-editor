import {SelectionState, ContentState, Modifier} from "draft-js"

const getBlockRange = (contentState: ContentState, blockKey: string) => {
    const block = contentState.getBlockForKey(blockKey);
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

export {getBlockRange, removeBlock}
