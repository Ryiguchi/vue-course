import { createApp } from 'vue';
import router from './router/index';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// This waits until the router is ready (prevents the router from starting on an empty route ) before mounting Vue. This will prevent a starting route animation on page load.
router.isReady().then(() => {
  app.mount('#app');
});
