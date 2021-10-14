import * as React from 'react';
import {EditorState, convertFromRaw} from 'draft-js';
import ReadonlyCellEditor from '../../CellEditor';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import {FormGroup} from "@mui/material";

function MyQuestion(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {block, contentState} = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const {title, solution, type, data, desc, checkIndex} = entity.getData();
  let raw = solution.content;
  let solutionEditorState, descEditorState;
  if (!raw) {
    solutionEditorState = EditorState.createEmpty();
  } else {
    solutionEditorState = EditorState.createWithContent(convertFromRaw(raw));
  }
  if (!desc.content) {
    descEditorState = EditorState.createEmpty();
  } else {
    descEditorState = EditorState.createWithContent(convertFromRaw(desc.content));
  }
  const blockKey = block.getKey()

  let chipLabel
  if (type === "radio") {
    chipLabel = '单选题'
  } else if (type === 'checkbox') {
    chipLabel = '多选题'
  } else if (type === 'desc') {
    chipLabel = '简答题'
  }

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <h4 style={{marginBottom: "0px"}}>
          {chipLabel &&
          <Chip label={chipLabel} variant="outlined"/>
          }
          &nbsp;&nbsp;{title}
        </h4>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="题目描述" {...a11yProps(blockKey, 0)} />
          <Tab label="答案详解" {...a11yProps(blockKey, 1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} blockKey={blockKey}>
        {type === "radio" &&
        <RowRadioButtonsGroup data={data}/>
        }
        {type === "checkbox" &&
        <RowCheckboxButtons data={data}/>
        }
        {type === 'desc' &&
        <ReadonlyCellEditor editorState={descEditorState}/>
        }
      </TabPanel>
      <TabPanel value={value} index={1} blockKey={blockKey}>
        <ReadonlyCellEditor editorState={solutionEditorState}/>
      </TabPanel>
    </Box>
  );
}

export default MyQuestion;

function TabPanel(props) {
  const {children, value, index, blockKey, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`question-tabpanel-${blockKey}-${index}`}
      aria-labelledby={`question-tab-${blockKey}-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(blockKey, index) {
  return {
    id: `question-tab-${blockKey}-${index}`,
    'aria-controls': `question-tabpanel-${blockKey}-${index}`,
  };
}

function RowRadioButtonsGroup(props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup>
        {props.data.map((option, idx) => {
          return <FormControlLabel value={option} control={<Radio/>} label={option}/>
        })}
      </RadioGroup>
    </FormControl>
  );
}

function RowCheckboxButtons(props) {
  return (
    <FormGroup sx={{width: "100%"}}>
      {props.data.map((option) => {
        return <FormControlLabel control={<Checkbox/>} label={option}/>
      })}
    </FormGroup>
  );
}
