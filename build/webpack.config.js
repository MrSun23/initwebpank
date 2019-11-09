const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname, '../');
const sourcePath = path.join(rootPath, 'src');
const outputPath = path.join(rootPath, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].[hash:8].js',
    path: outputPath,
  },
  resolve: {
    alias: {
      '~': sourcePath,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [sourcePath],
        use: 'babel-loader'
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '测试webpack & react',
      template: path.join(sourcePath, '/index.html')
    }),
  ]
};