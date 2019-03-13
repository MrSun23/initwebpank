const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

baseConfig.entry.bundle.push('webpack-hot-middleware/client?timeout=200&overlay=true');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  optimization: {
    noEmitOnErrors: true,
    occurrenceOrder: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
});