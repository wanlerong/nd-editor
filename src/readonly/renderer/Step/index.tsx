import * as React from 'react';
import {EditorState, convertFromRaw, ContentBlock, ContentState} from 'draft-js';
import {Stepper, Step, StepLabel, StepContent, Typography} from "@mui/material";
import ReadonlyCellEditor from "../../CellEditor";

interface Props {
  block?: ContentBlock,
  contentState?: ContentState
}

function MyStep(props: Props) {

  const {block, contentState} = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const {list} = entity.getData();

  return (
    <Stepper orientation="vertical">
      {list.map((item: any, idx: any) => {
        let raw = item.content;
        let editorState;
        if (!raw) {
          editorState = EditorState.createEmpty();
        } else {
          editorState = EditorState.createWithContent(convertFromRaw(raw));
        }
        return (
          <Step key={idx} expanded={true} active={true}>
            <StepLabel><h4>{item.title}</h4></StepLabel>
            <StepContent>
              <Typography>
                <ReadonlyCellEditor editorState={editorState}/>
              </Typography>
            </StepContent>
          </Step>
        )
      })}
    </Stepper>
  );
}

export default MyStep