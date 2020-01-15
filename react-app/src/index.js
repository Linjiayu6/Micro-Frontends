import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

// 如果当前页面没有使用single-spa
if (!window.singleSpaNavigate) {
  ReactDOM.render(<App />, document.getElementById('react_root'));
}

// 如果是single-spa模式, 需要自定义挂载至主模板里面
//创建生命周期实例
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: domElementGetter // 指定要挂载到哪个dom元素上面
});

// 项目启动的钩子
export const bootstrap = [
  reactLifecycles.bootstrap,
];

// 项目启动后的钩子
export const mount = [
  reactLifecycles.mount,
];

// 项目卸载的钩子
export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  // Make sure there is a div for us to render into
	let el = document.getElementById('react-single-app');
	if (!el) {
		el = document.createElement('div');
		el.id = 'react-single-app';
		document.body.appendChild(el);
	}
	return el;
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
