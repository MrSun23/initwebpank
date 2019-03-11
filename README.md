# initwebpack

学习webpack的使用

## 分支

### master 基本配置

基本配置，包含entry、output、clean-webpack-plugin、html-webpack-plugin的基本使用
  1. entry配置打包入口
  2. output配置打包出口
  3. clean-webpack-plugin作为清除文件夹插件
  4. html-webpack-plugin是根据提供的html模版，自动生成可使用的html文件

### learn/1 基本loader

增加style-loader、css-loader、url-loader配置
  1. css-loader 加载css文件，处理类似 import './index.css'
  2. style-loader 将css-loader处理完毕的样式通过```<style>```标签添加到页面中
  3. url-loader 处理资源引入，比如图片、字体文件等等，不仅可以解析```require(a.png)```，还可以通过配置使小图片转为base64格式。url-loader依赖files-loader

### learn/2 webpack服务器

现在每次改动，我们都需要重新build一次，我们需要让webpack持续监听文件改动，然后配置服务器访问。一种是webpack-dev-server构建，一种是webpack-dev-middleware+node服务器构建。第一种简单易用，第二种灵活性更高，我们这里选择第二种
  1. 增加express搭建node服务器
  2. 引入webpack-dev-middleware中间件将node服务器与webpack结合起来

### learn/3 热替换模块

现在我们每次改动。webpack都会自动构建新的了，但是还需要我们手动刷新浏览器才能看到最新的代码，这很不开心，所以我们希望浏览器能自动更新我们的代码，这个功能在webpack中被叫做模块热替换，即*HMR*。
  1. 增加```webpack.NamedModulesPlugin```和```webpack.HotModuleReplacementPlugin```启用热更新
     1. ```NamedModulesPlugin```插件会显示模块的相对路径，适用于开发环境
     2. ```HotModuleReplacementPlugin```插件是热替换模块插件。
  2. 使用```webpack-dev-middleware```+node服务器的模式下，我们使用```webpack-hot-middleware```这个中间件来配合webpack启用*HMR*
     1. server中增加webpack-hot-middleware的使用
     2. 在需要开启热替换的文件尾部添加```module.hot.accept()```，事实上我们为整个项目可以热替换，我们直接在入口文件中增加
     3. 更改webacpk.config.js中的```entry```，我们需要增加部分```webpack-hot-middleware```的配置

### learn/4 增加vue

现在我们增加了vue和vue-router，element-ui和axios，为了处理.vue文件，我们更改了一下配置
  1. 增加了vue-loader和vue-template-compiler来处理vue文件
  2. plugins中添加了vue-loader的plugin
   
### learn/5 路径

现在我们发现不管是img中的src需要```../../asstes/**```的写法，router中引入home文件也需要```../page/```的写法，既麻烦又容易错，所以我们配置了路径别名，来解决这个问题
  1. webpack.config.js中新增加resolve.alias，配置```~```指向```src```目录
  2. 为了解决template和style中的url问题，我们单独配置了```assets```指向```src/assets```，更方便的书写图片src
  3. 为了使用scss语法，新增加sass-loader