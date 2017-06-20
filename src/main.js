import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import routerConfig from './routerConfig.js'
import Loading from './components/loading'
Vue.use(Vuex);
Vue.use(Loading);
Vue.use(VueRouter);
const router=new VueRouter({
	routes:routerConfig
});
new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
 