## 切换淘宝源
在npm命令中执行一下命令

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
之后，全部使用cnpm来安装、调用等。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 项目布局(尽量只提交src下的内容)
```
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- test                             // 测试目录
|-- static                           // 项目静态资源
|-- src                              // 源码目录
    ├─assets                         // 静态资源目录，放img & ttf等
    ├─components                     // 公共组件，如footer，header等
    ├─config                         // 基础配置的js文件
    ├─pages                          // 具体的页面，如登陆页、首页等
    ├─router                         // 路由配置  
    ├─APP.vue                        // 主vue文件
    └─main.js                        // 主js文件         
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明

```

老师和学生端原型：https://g80a7e.axshare.com
后台原型：https://1cyujq.axshare.com

接口：http://39.106.143.18:5000/swagger_ui/index.html#/Teacher/post_api_v1_teacher