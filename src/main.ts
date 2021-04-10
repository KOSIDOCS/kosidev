import Vue from 'vue'
import App from './App.vue'
import './assets/scss/globals.css'
import './assets/css/bootstrap.css'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
