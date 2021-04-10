import Vue from 'vue'
import App from './App.vue'
import './assets/scss/globals.css'
import './assets/css/bootstrap.css'
import './registerServiceWorker'
import 'vue2-animate/src/sass/vue2-animate.scss'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueAnimate from 'vue-animate-scroll'
import Scrollspy from 'vue2-scrollspy'

Vue.use(Scrollspy)

Vue.use(VueAnimate)

Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
