const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rootPath = path.join(__dirname, '../');
const sourcePath = path.join(rootPath, 'src');
const outputPath = path.join(rootPath, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    bundle: ['./src/main.js', 'webpack-hot-middleware/client?timeout=200&overlay=true']
  },
  output: {
    filename: '[name].[hash:8].js',
    path: outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|ect)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, '/index.html')
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
  ]
};