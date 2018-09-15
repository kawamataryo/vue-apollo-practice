import Vue from 'vue'
import '@/plugins/vuetify'
import App from '@/App'
import router from '@/plugins/router'
import store from '@/plugins/store'
import apolloProvider from '@/plugins/apollo'

Vue.config.productionTip = false

new Vue({
  router,
  provide: apolloProvider.provide(),
  store,
  render: h => h(App)
}).$mount('#app')
