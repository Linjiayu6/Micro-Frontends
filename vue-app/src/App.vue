<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>前端路由列表</div>
    <h3><router-link :to="{name:'HelloWorld'}">to: /</router-link></h3>
    <h3><router-link :to="{name:'A'}">to: /a</router-link></h3>
    <div>路由对应内容渲染</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
