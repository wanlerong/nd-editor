import React, {Component} from 'react';
import {EditorState, convertFromRaw} from 'draft-js';
import ReadonlyCellEditor from "../../CellEditor";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class MyCollapse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {list} = entity.getData();

    return (
      <div>
        {list.map((item, index) => {
          let raw = item.content;
          let editorState;
          if (!raw) {
            editorState = EditorState.createEmpty();
          } else {
            editorState = EditorState.createWithContent(convertFromRaw(raw));
          }
          return (<Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls={"panel1a-content-" + index}
              id={"panel1a-header-" + index}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ReadonlyCellEditor editorState={editorState}/>
            </AccordionDetails>
          </Accordion>)
        })}
      </div>
    );
  }
}

export default MyCollapse
