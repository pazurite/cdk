// Import Vue
import Vue from 'vue';

// Import Vue App, routes, store
import App from './App.vue';

import { CdkBreakpoint } from '@/breakpoints';

Vue.use(CdkBreakpoint);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
