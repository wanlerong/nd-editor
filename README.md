# [ndp-editor](https://www.notedeep.com/)

An editor built on draft js which is using in notedeep.com

## Installation

```bash
npm install ndp-editor --save
npm install react react-dom @mui/material @emotion/react @emotion/styled --save
```

## Documentation
webpack config 里面的 external，仅仅表示要不要把依赖打到 bundle.js 里面去

### devDependencies 开发中使用到的依赖：

为了支持 js 后缀的文件
"@babel/core": "^7.15.5",
"@babel/preset-env": "^7.15.6",
"@babel/preset-react": "^7.14.5",
"babel-loader": "^8.2.2",

为了支持编写 material 的代码，但是在打包时，是不需要被打包到 bundle.js 里面的。
仅仅是开发时使用，会在外部项目引入，所以 external 掉。
@mui/material 
@emotion/react 
@emotion/styled

npm run build 即 webpack 打包时，material 需要用到 17 以上的 react。
仅仅是开发时使用，会在外部项目引入，所以 external 掉。
"react": "^17.0.2",
"react-dom": "^17.0.2",

## Dependencies

使用了 Dependencies，不需要被打到 bundle 里面，外部项目无需显式地安装这些依赖，会因为被 ndp-editor 依赖而安装
"katex": "^0.5.1",
"prismjs": "^1.25.0"


## Examples

### License

ndp-editor is MIT
