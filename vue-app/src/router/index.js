import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import A from '@/components/A';

Vue.use(Router);

// singleSPA需要配置路由前缀
const prefix = window.singleSpaNavigate ? '/vue' : '';
export default new Router({
  mode: 'history',
  routes: [
    {
      path: `${prefix}/`,
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: `${prefix}/a`,
      name: 'A',
      component: A,
    },
  ],
});
