import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from '@/App';
import router from '@/router/index';
import store from '@/store/index';

// подключаем обработку touch событий (swipe влево, вправо)
Vue.use(Vue2TouchEvents);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
