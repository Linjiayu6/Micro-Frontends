
import { registerApplication, start } from 'single-spa'
/*
* runScript：一个promise同步方法。可以代替创建一个script标签，然后加载服务
* */
const runScriptLink = async (url) => {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
  });
};

// 1. 子项目1
registerApplication(
  'vue-single-app',
  async () => {
      await runScriptLink('http://localhost:7000/app.js');
      return window['vueApp'];
  },
  location => location.pathname.startsWith('/vue')
);

// 2. 子项目2
registerApplication(
  'react-single-app',
  async () => {
      await runScriptLink('http://localhost:3000/static/js/bundle.js');
      await runScriptLink('http://localhost:3000/static/js/0.chunk.js');
      await runScriptLink('http://localhost:3000/static/js/main.chunk.js');

      return window['reactApp'];
  },
  location => location.pathname.startsWith('/react')
);

registerApplication(
  'test',
  () => import('./src/test.js'),
  location => location.pathname.startsWith('/test')
);

start();