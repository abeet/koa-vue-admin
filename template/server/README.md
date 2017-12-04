# {{ name }}
### 概述
{{ description }}  
前端使用用Vue及ElementUI框架，后端实现RESTful规范的接口与前端进行交互。  

### 运用到的工具：
> gulp + webpack3 + babel 
### 使用到的库或框架：
* [x] **[Node.JS](https://nodejs.org)** v8.x.x
* [x] **[Koa](https://github.com/koajs/koa)**
* [x] [MongoDB](https://www.mongodb.com/) with [Mongoose](https://github.com/Automattic/mongoose)
* [x] [NodeMailer](https://github.com/nodemailer/nodemailer) with SMTP, MailGun or SendGrid
* [x] [Helmet](https://github.com/helmetjs/helmet)
* [x] [koa-validate](https://github.com/RocksonZeta/koa-validate)
* [x] [winston](https://github.com/winstonjs/winston) + 6 transports
* [x] **[GraphQL](http://graphql.org/)** with [Apollo stack](http://www.apollostack.com/)
* [x] [i18next](http://i18next.com/) as the internationalization ecosystem
* [x] **[HTTP/2 Server Push](https://en.wikipedia.org/wiki/HTTP/2_Server_Push)** with [netjet](https://github.com/cloudflare/netjet)
* [x] Bundled server-side code with [Webpack 2](https://webpack.github.io/)


## 开发流程：
1. 克隆本脚手架前端工程、后端工程，配置数据库，导入示例数据。
1. 根据项目实际需求，配置路由和菜单，准备各路由所对应的vue文件，vue文件内容为空白，待分配给项目成员实现。
1. 实现vue文件的界面部分，暂时使用axios-mock-adapter来拦截ajax请求，返回mock数据，注意mock数据的字段和数据库表设计有关。
1. 后端实现RESTful接口，并维护接口文档（在doc目录下维护raml格式接口文档或使用 http://apizza.cc 在线文档服务）
1. 前端取消axios-mock-adapter拦截，调试后端接口。

## 注意事项
1. JS风格使用`JavaScript Standard Style`，建议使用VSCode作为js/vue的编辑器，并安装以下插件`EditorConfig for VSCode`,`Prettier-Standard - JavaScript formatter`,`JavaScript Standard Style`,`stylefmt`,`Vetur`。
  并且vscode的配置里要加下面的命令，防止格式化时自动加分号。   
  `  "prettier.singleQuote": true,`  
  `  "prettier.semi": false,`  
1. 后端接口符合RESTful规范
1. 注意后端返回前端的数据，字段名同数据库中的字段名，为小写字母开头的驼峰式命名，构造mock数据时也要注意这一点。
1. 不要提交`node_modules`和`dist`目录到git工程里  
1. 写接口的同事可维护raml格式接口文档，并用raml2html生成html格式接口文档（也可以使用 http://apizza.cc 在线文档服务）
1. 从后台请求的数据有分页的情况下，Request参数的约定：`pageindex` 第几页（从第1页开始）；`pagesize` 每页返回多少行。Response中返回数据除了有列表外，还要有`total`供分页条显示总记录数。

少数特定的api也可以支持
startindex 从第几行记录开始
count 返回多少行记录

## 目录说明
目录结构类似 https://github.com/icebob/vue-express-mongo-boilerplate 但有简化、调整。

```
source
|   |   bundle.js
|   |   dev.js
|   |   index.js
|   +---applogic
|   |   +---libs
|   |   +---modules
|   |       +---counter
|   |       +---devices
|   |       +---posts
|   |       +---session
|   +---config
|   |       default.js
|   |       index.js
|   |       prod.js
|   |       test.js
|   |       
|   +---core
|   +---libs
|   +---locales
|   |   +---en
|   |   +---hu
|   +---models
|   |       user.js
|   +---public
|   +---routes
|   +---schema
|   +---services
|   +---views
```

## 开发与构建命令
建议使用npm5或以上版本，建议使用淘宝的npm仓库镜像，安装npm包速度更快：

``` bash
# 更新npm到最新版   
npm install npm@latest -g

# 使用淘宝的npm仓库镜像   
npm config set registry https://registry.npm.taobao.org

```

``` bash
# 安装依赖   
npm install

# 进入开发模式，启动前台应用，localhost:3000 。监听js文件改动自动刷新浏览器  
npm run dev

# 构建文件到dist目录供发布  
npm run build

```
```bash
# 安装 api-designer 到全局   
npm install -g api-designer

# 使用 api-designer 编辑raml格式接口文档，编辑时是暂存在浏览器本地缓存中的，需要导出或复制到工程根目录下API.raml文件
api-designer

# 安装 raml2html 到全局   
npm install -g raml2html

# 构建raml格式接口文档为html格式接口文档
raml2html API.raml -o API.html

```

## 链接
Node.js 8.x 文档  
https://nodejs.org/docs/latest-v8.x/api/

koa 2.x 文档  
https://github.com/koajs/koa/blob/master/docs/api/index.md

sequelize 文档  
http://docs.sequelizejs.com/manual/

RAML 1.0 文档  
https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md  
