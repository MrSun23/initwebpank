import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';

Vue.use(ElementUI);

window.VM = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
