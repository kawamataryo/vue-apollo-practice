import Vue from 'vue'
import '@/plugins/vuetify'
import App from '@/App'
import router from '@/plugins/router'
import apolloProvider from '@/plugins/apollo'

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
