# vue-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:7000
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 子项目配置
- 构建出口配置: 主框架引用
- 打包出口配置: 定义生命周期

## install
``` bash
vue init webpack vue-app
```

## webpack.base.conf.js
- window.vueApp

``` bash
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    // window挂在 library: 'vueApp',
    library: 'vueApp',
    libraryTarget: 'window'
```

## src/main.js

``` bash
npm install single-spa-vue --save

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import singleSpaVue from 'single-spa-vue'

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 如果当前页面没有使用single-spa
if (!window.singleSpaNavigate) {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}

// 定义挂载的id和内容, 生命周期
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router
  }
})
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
```