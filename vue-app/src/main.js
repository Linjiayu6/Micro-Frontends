// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App';
import router from './router';

Vue.config.productionTip = false;


/* eslint-disable no-new */
// 如果当前页面没有使用single-spa
if (!window.singleSpaNavigate) {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
  });
}

// 定义single-spa的生命周期
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router,
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
