<template>
  <div id="app">
    <ana-header></ana-header>
    <router-view></router-view>
    <ana-footer></ana-footer>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'ana-header': Header,
    'ana-footer': Footer
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: cornflowerblue;
  margin-top: 0;
  min-height: 100%;
  position: relative;
}
</style>
