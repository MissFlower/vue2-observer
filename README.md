# vue2-observer
vue2 observer
### 一、初始化项目
命令行
`
npm init -y
`
### 二、安装webpack及相关插件
命令行
`
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin -D
`  
### 三、配置文件
  >1.package.json文件
  ```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve",
    "build": "webpack"
  }
  ```
>**注意：**webpack5.x.x dev配置稍有变化 webpack5之前dev配置webpack-dev-server --config  
>执行命令npm run dev 发现报错： Error: Cannot find module 'webpack-cli/bin/config-yargs’  
>查阅资料发现webpack5.x.x dev配置为 webpack serve 如还有错误请到 [git issues](https://github.com/webpack/webpack-dev-server/issues/2424)