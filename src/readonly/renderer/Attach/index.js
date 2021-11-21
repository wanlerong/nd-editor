import React, {Component} from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {humanFileSize} from "../../../utils/mimeTypes";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Attach extends Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.state = {
      aHref: "javascript:void(0);",
    };
  }

  download = async (e) => {
    const {block, contentState, blockProps} = this.props;
    if (blockProps.beforeDownload) {
      let canDownload = await blockProps.beforeDownload()
      if (!canDownload) {
        return
      }
    }
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {src, name} = entity.getData();
    let theSrc = src.replace('http://', 'https://');
    let newHerf = theSrc + "?attname=" + encodeURIComponent(name);
    let downloadFunc = async () => {
      await this.setState({aHref: newHerf});
      await this.fileLinkElement.click();
      this.setState({aHref: "javascript:void(0);"});
    }
    downloadFunc()
  }

  render() {
    let {aHref} = this.state;
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {name, size} = entity.getData();
    return (
      <Box sx={{width: "100%"}}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              <AttachFileIcon/>{name}&nbsp;{humanFileSize(size, true)}
            </Typography>
          </CardContent>
          <CardActions>
            <a href={aHref} ref={fileLink => this.fileLinkElement = fileLink}>
              <Button variant="outlined" onClick={this.download} startIcon={<DownloadIcon/>}>
                下载
              </Button>
            </a>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default Attach
