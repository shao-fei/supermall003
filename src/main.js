import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
//import Mock from '../mock/index.js'
//require('../mock/index.js')

//vant样式
import { Button } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Button)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
