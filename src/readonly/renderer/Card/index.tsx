import * as React from 'react';
import {EditorState, convertFromRaw, ContentBlock, ContentState} from 'draft-js';
import ReadonlyCellEditor from '../../CellEditor';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
  block?: ContentBlock,
  contentState?: ContentState
}

function MyCard(props: Props) {

  const {block, contentState} = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const {content, noteRaw} = entity.getData();
  let raw = content.content;
  let contentEditorState, noteEditorState;
  if (!raw) {
    contentEditorState = EditorState.createEmpty();
  } else {
    contentEditorState = EditorState.createWithContent(convertFromRaw(raw));
  }
  if (!noteRaw.content) {
    noteEditorState = EditorState.createEmpty();
  } else {
    noteEditorState = EditorState.createWithContent(convertFromRaw(noteRaw.content));
  }

  return (
    <Box>
      <Card variant="outlined" sx={{display: "flex"}}>
        <CardContent sx={{flex: 2}}>
          <Typography variant="body2">
            <ReadonlyCellEditor editorState={contentEditorState}/>
          </Typography>
        </CardContent>
        <CardContent sx={{flex: 1}}>
          <Typography variant="body2">
            <ReadonlyCellEditor editorState={noteEditorState}/>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default MyCard
