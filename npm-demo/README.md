# npm 使用

初始化 node 项目
```bash
npm init
```

安装第三方模块
```js
npm install [packagename] [--save]
// 安装到了node_modules
--save:记录到dependencies字段下
--save-dev:记录到devDependencies字段下
--global:缩写为 -g ，安装我们的系统是，可以在任何位置使用
```

卸载模块
```bash
npm uninstall [packagename] [-g]
```
