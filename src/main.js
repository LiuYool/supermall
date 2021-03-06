import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import lazyload from 'vue-lazyload'
import FastClick from 'fastclick'

Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue() //事件总线
//图片懒加载
Vue.use(lazyload)
//解决移动端300毫秒延迟的问题
FastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
