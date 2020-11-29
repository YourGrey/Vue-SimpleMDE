import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueSimplemde) 
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
