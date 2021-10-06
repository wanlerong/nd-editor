const path = require('path')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    library: "ndp-editor",
    globalObject: 'this'
  },
  externals: [
    {
      // Use external version of React
      "react": {
        "commonjs": "react",
        "commonjs2": "react",
        "amd": "react",
        "root": "React"
      },
      "react-dom": {
        "commonjs": "react-dom",
        "commonjs2": "react-dom",
        "amd": "react-dom",
        "root": "ReactDOM"
      },
      "draft-js": {
        "commonjs": "draft-js",
        "commonjs2": "draft-js",
        "amd": "draft-js",
      }
    },
    /@mui\/material\/.*/,
  ]
}
