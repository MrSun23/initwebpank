const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rootPath = path.join(__dirname, '../');
const sourcePath = path.join(rootPath, 'src');
const outputPath = path.join(rootPath, 'dist');

module.exports = {
  entry: {
    bundle: ['./src/main.js']
  },
  output: {
    filename: '[name].[hash:8].js',
    path: outputPath,
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
      { // 普通的.scss文件和vue文件中的`<style lang="scss">`都应用它
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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
  resolve: {
    alias: {
      '~': sourcePath,
      'assets': path.join(sourcePath, '/assets')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, '/index.html')
    }),
    new webpack.NamedChunksPlugin(),
    new VueLoaderPlugin(),
  ]
};