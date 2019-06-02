import accessKey from './keys';
import secretKey from './keys';
import Vue from 'vue'
import App from './App.vue'
import Unsplash from 'unsplash-js';

Vue.config.productionTip = false;

export const unsplash = new Unsplash({
  applicationId: accessKey,
  secret: secretKey
});

new Vue({
  render: h => h(App),
}).$mount('#app')
