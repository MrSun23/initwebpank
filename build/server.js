const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express(); // 创建express服务器
const config = require('./webpack.config.js'); // webpack配置
const compiler = webpack(config); // 启动webpack打包，把配置传入

app.use(webpackDevMiddleware(compiler, { // 向express服务器中增加webpackDevMiddleware
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler)); // 向express服务器中增加webpackHotMiddleware

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => {
  console.log('listening on port 3000');
});