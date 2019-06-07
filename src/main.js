import Vue from 'vue'
import App from './App'
import router from './router'
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false
Vue.use(VuePaginate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
