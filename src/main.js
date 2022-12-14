import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import vuetify from './plugins/vuetify'
import 'leaflet/dist/leaflet.css'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
