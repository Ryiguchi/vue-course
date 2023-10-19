import { createApp, ref, computed } from 'vue';
import { createPinia, defineStore } from 'pinia';

import App from './App.vue';

const pinia = createPinia();

export const useStore = defineStore('store', () => {
  const counter = ref(0);

  function increment() {
    counter.value++;
  }

  return {
    counter,
    increment,
  };
});

const app = createApp(App);

app.use(pinia);

app.mount('#app');
