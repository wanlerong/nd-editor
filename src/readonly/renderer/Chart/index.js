import React, {Component} from 'react';
// import the core library.
import ReactEchartsCore from 'echarts-for-react/lib/core';
// then import echarts modules those you have used manually.
import echarts from 'echarts/lib/echarts';
// todo import 导致文件太大 https://webpack.js.org/guides/code-splitting/
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';

class MyChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {block, contentState} = this.props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const {config} = entity.getData();

    return (
      <div>
        <ReactEchartsCore
          echarts={echarts}
          style={{height: '300px', width: "auto"}}
          option={config}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </div>
    );
  }
}

export default MyChart
