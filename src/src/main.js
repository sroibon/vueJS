import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Welcome from './components/Welcome'
import AnagramInput from './components/AnagramInput'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/anagram-input',
    component: AnagramInput
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
