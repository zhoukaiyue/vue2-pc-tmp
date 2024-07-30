# 简介

"vue2-pc-tmp" 是基于 Vue2.7 + VueCli5 + Vuex + Vant2 + sass + axios（封装）+ Eslint + Prettier + dayJs + tailwindcss 等流行技术栈构建的 PC 端模板脚手架，开箱即用。

## 原子化 CSS 支持 - Tailwindcss

本项目支持原子化 CSS，我们选择使用 [Tailwindcss](https://www.tailwindcss.cn/docs/installation)。Tailwindcss 是一个高度可定制的，低层级的 CSS 框架，它提供了丰富的预设类，使得开发者可以快速地构建现代化的用户界面。使用 Tailwindcss，你可以在 HTML 中直接引用预设类，而无需在 CSS 文件中编写大量的样式代码。

## 环境要求

-   node ^14.17.0 || >=16.0.0
-   pnpm >=7

## 编辑器以及对应扩展

-   Visual Studio v69+
-   Vetur v0.35.0+
-   Eslint v2.2.6+
-   Prettier - Code formatter v9.5.0+

## 快速开发

```
#通过 npm 安装 pnpm (如果本地已安装pnpm,请忽略)
npm install -g pnpm
#安装项目依赖
pnpm install
#开发环境启动
pnpm start
#打包 test 环境代码
pnpm build:test
#打包生产环境代码
pnpm build or pnpm build:prod
#执行 js 类型检查
pnpm lint:fix
#执行 prettier 批量格式化代码
pnpm lint:prettier

##注：详细请阅读package.json 以及对应的环境配置文件（即.env 文件）！
```

```text
同时在项目根目录下包含一个 run.bat，该文件会列出所有 package.json 中 script 块里面的所有命令，
通过双击该文件，你可以在命令行中输入相应的序号并按 Enter 键，程序将运行你选择的脚本。
```

## 开发基础规范

-   🚀 重要、复杂逻辑一定要写注释；
-   🚀 代码规范按照 eslint 的规则来，做到 no waring 和 no error；
-   🚀 项目业务开发，优先使用 vue 全家桶技术栈开发项目，预编译使用 sass；
-   🚀 操作成功或失败后要有提示，比如新增成功、新增失败运行时间长的任务（计算量大、请求后台接口），要有 loadding 效果；
-   🚀 vue 单文件组件代码规范，html、script、style 的位置顺序 html > script > style；
-   🚀 公共的状态才放到 store；
-   🚀 代码尽量往纵向发展，一行不要太长；
-   🚀 不要在钩子函数中写大量业务代码；
-   🚀 异步使用 aysnc await 语法；
-   🚀 不是常用的方法不要全局挂载；
-   🚀 文件命名如果是多单词则采用驼峰命名或者烤肉串大小写，尽量简洁明了；

### 基础组件名。 【注：src/resources/components 目录。】

> 基础组件文件命名应该以 base 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ resources
   └─ components
      └─ base-list
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 业务组件名。 【注：src/views/components 目录。】

> 业务组件文件命名应该以 the 为前缀命名，以示其唯一性，并且以横线连接。

```
例子：
src
└─ views
   └─ components
      └─ the-button
         ├─ index.vue      //源码
         └─ README.md      //组件使用说明文档
```

### 路由文件创建与命名。 【注：src/config/router 目录。】

为了方便维护与开发，建议路由文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ router
      └─ dev.js
```

### 接口文件创建与命名。 【注：src/config/apis 目录。】

为了方便维护与开发，建议接口文件命名与对应的页面文件命名保持一致，尽量简洁明了。

```
例子：
src
└─ config
   └─ apis
      └─ dev.js
```

### 状态切片文件创建与命名。 【注：src/config/store 目录。】

为了方便维护与开发，建议以当前对应模块或者功能命名文件夹，尽量简洁明了。

```
例子：
src
└─ config
   └─ store
      └─ dev
         └─ index.js
```

### 图片资源。 【注：src/assets/img 目录。】

建议图片文件夹命名与对应的页面文件命名保持一致，公共图片资源放置到 src/assets/img/base 目录下即可。

```
例子：
src
└─ assets
   └─ img
```

## git 版本规范

### 分支管理

一般项目分主分支（master）和其他分支。 当有团队成员要开发新功能(Feather)或改 BUG(Fix) 时，就从 master 分支开一个新的分支。

### Commit 规范

-   feat 新增功能
-   fix 修复 bug
-   docs 文档变更
-   style 代码格式（不影响功能，例如空格、分号等格式修正）
-   refactor 代码重构
-   perf 改善性能
-   test 测试
-   build 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）
-   ci 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等
-   chore 变更构建流程或辅助工具
-   revert 代码回退

### Tag 版本号

版本号以 v 开头，根据当前仓库的 tag 编号进行累加，如：v1.10.45。

## 项目目录说明

```
vue2-pc-tmp                                 // 项目根目录
├─ .browserslistrc                          // 浏览器兼容性配置文件
├─ .env.development                         // 开发环境变量
├─ .env.production                          // 生产环境变量
├─ .env.test                                // 测试环境变量
├─ .eslintignore                            // ESLint 忽略配置
├─ .eslintrc.js                             // ESLint 配置文件
├─ .npmrc                                   // npm 配置文件
├─ .prettierrc.js                           // Prettier 配置文件
├─ .vscode                                  // VSCode 配置文件夹
│  └─ settings.json                         // VSCode 设置
├─ babel.config.js                          // Babel 配置文件
├─ cleanCache.js                            // 清理缓存脚本
├─ jsconfig.json                            // JS 配置文件
├─ lint-staged.config.js                    // lint-staged 配置文件
├─ package.json                             // npm 包配置文件
├─ pnpm-lock.yaml                           // pnpm 锁文件
├─ postcss.config.js                        // PostCSS 配置文件
├─ public                                   // 公共文件夹
│  ├─ index.html                            // 入口 HTML 文件
│  └─ static                                // 静态资源文件夹
├─ README.md                                // 项目说明文件
├─ src                                      // 源代码文件夹
│  ├─ App.vue                               // 主 Vue 组件
│  ├─ assets                                // 资源文件夹
│  │  ├─ css                                // CSS 文件夹
│  │  └─ img                                // 图片文件夹
│  ├─ config                                // 配置文件夹
│  │  ├─ apis                               // API 文件夹
│  │  ├─ router                             // 路由配置文件夹
│  │  └─ store                              // Vuex store 文件夹
│  ├─ layout                                // 布局组件文件夹
│  ├─ main.js                               // 项目入口文件
│  ├─ packages                              // 包文件夹
│  │  ├─ request                            // 请求文件夹
│  │  ├─ router                             // 路由文件夹
│  │  └─ store                              // Vuex store 文件夹
│  ├─ resources                             // 资源文件夹
│  │  ├─ components                         // 组件文件夹
│  │  ├─ directive                          // 指令文件夹
│  │  └─ plugin                             // 插件文件夹
│  ├─ utils                                 // 工具函数文件夹
│  │  ├─ helper                             // 辅助函数文件夹
│  │  └─ tools                              // 工具函数文件夹
│  └─ views                                 // 视图组件文件夹
├─ tailwind.config.js                       // Tailwind CSS 配置文件
├─ util.js                                  // 工具函数文件
├─ vue.config.js                            // Vue CLI 配置文件
└─ 常见问题.md                               // CLI常见问题文档
```
