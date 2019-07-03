import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import directives from './directive'
Vue.config.productionTip = false
Vue.use(directives)
import mavonEditor from 'mavon-editor'
Vue.use(mavonEditor)
import 'mavon-editor/dist/css/index.css'
import './assets/icon/iconfont.css'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
