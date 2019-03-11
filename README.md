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
* learn/2: 现在每次改动，我们都需要重新build一次，我们需要让webpack持续监听文件改动，然后配置服务器访问。一种是webpack-dev-server构建，一种是webpack-dev-middleware+node服务器构建。第一种简单易用，第二种灵活性更高，我们这里选择第二种
  1. 增加express搭建node服务器
  2. 引入webpack-dev-middleware中间件将node服务器与webpack结合起来
