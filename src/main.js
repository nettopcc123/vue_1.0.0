// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import  VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import store from './store';
import Vuex from 'vuex'
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';


Vue.prototype.axios = axios;
Vue.use(VueAwesomeSwiper,Vuex,Toast)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { 
    App 
  },
  template: '<App/>'
})
