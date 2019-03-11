const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express(); // 创建http服务器
const config = require('./webpack.config.js'); // webpack配置
const compiler = webpack(config); // 启动webpack打包，把配置传入

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, () => {
  console.log('listening on port 3000');
});