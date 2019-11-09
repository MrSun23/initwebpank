# initwebpack

学习webpack的使用

## webpack & react 最基础

1. 引入webpack、webpack-cli作为webpack基本启动命令
2. 引入html-webpack-plugin配置构建后html的模版
3. 引入clean-webpack-plugin在构建前清空dist文件夹
4. 引入@babel/core、@babel/preset-env、@babel/preset-react。编译JSX与es6。
5. 引入babel-loader将webpack与babel关联，配置module.rules。
6. webpack本身只会解析js文件，所以需要`import App from './app.jsx'`的方式引入`jsx`文件。

到此为止可以成功构建一个react项目。

## webpack - resolve

webpack中resolve的配置项，主要是配置如何解析模块。

1. `resolve.alias`：创建别名，使引入模块更容易，不需要在书写是使用相对路径引入。
   ```
    // webpack-config
    resolve: {
      alias: {
        '~': path.join(__dirname, '../src')
      }
    }
    // app.jsx
    import { TestFun } from './utils';
    import { TestFun } from '~/utils';
   ```
   但是定义别名后vscode无法解析路径。
   为了使vscode能够解析路径，需要为vscode单独增加`jsconfig.json`文件
   ```
    // jsconfig.json
    {
      "compilerOptions": {
        "baseUrl": "./",
        "paths": {
          "~/*": ["src/*"]
        }
      },
      "exclude": ["node_modules", "dist"],
      "include": ["src"]
    }
   ```