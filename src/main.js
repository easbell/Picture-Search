import Vue from 'vue'
import App from './App.vue'
import Unsplash from 'unsplash-js';

Vue.config.productionTip = false;

export const unsplash = new Unsplash({
  applicationId: process.env.VUE_APP_ACCESS_KEY,
  secret: process.env.VUE_APP_SECRET_KEY
});

new Vue({
  render: h => h(App),
}).$mount('#app')
