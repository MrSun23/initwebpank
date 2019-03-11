# initwebpack

学习webpack的使用

# 分支

* master: 基本配置，包含entry、output、clean-webpack-plugin、html-webpack-plugin的基本使用
  1. entry配置打包入口
  2. output配置打包出口
  3. clean-webpack-plugin作为清除文件夹插件
  4. html-webpack-plugin是根据提供的html模版，自动生成可使用的html文件
* learn/1: 增加style-loader、css-loader、url-loader配置
  1. css-loader 加载css文件，处理类似 import './index.css'
  2. style-loader 将css-loader处理完毕的样式通过```<style>```标签添加到页面中
  3. url-loader 处理资源引入，比如图片、字体文件等等，不仅可以解析```require(a.png)```，还可以通过配置使小图片转为base64格式。url-loader依赖files-loader
