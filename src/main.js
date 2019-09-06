// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'



// Vue.prototype.$utils = utils;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
// 引入ydui-ui   把所有的组件都引入了
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
Vue.use(YDUI);
Vue.config.productionTip = false
import './assets/js/ydui.flexible'
/* eslint-disable no-new */
new Vue({
  el: '#app',
 
  components: { App },
  template: '<App/>'
})
