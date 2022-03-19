import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma';
import store from './state/store';
import '..\\node_modules\\bulma-tooltip\\dist\\css\\bulma-tooltip.min.css';
import 'bulma-tooltip';

Vue.config.productionTip = false

Vue.use(bulma);

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')

