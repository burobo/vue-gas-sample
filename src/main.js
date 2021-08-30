import Vue from 'vue';
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import gas from './mixins/gas'
import mockGas from './mixins/mockGas'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

if (process.env.NODE_ENV === 'development') {
  Vue.mixin(mockGas);
} else if (process.env.NODE_ENV === 'production') {
  Vue.mixin(gas);
}

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
