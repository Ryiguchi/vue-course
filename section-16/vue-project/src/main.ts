import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { defineAsyncComponent } from 'vue';

import App from './App.vue';
import router from './router/index';

import BaseCard from './components/base/BaseCard.vue';
import BaseButton from './components/base/BaseButton.vue';
import BaseBadge from './components/base/BaseBadge.vue';
import BaseSpinnner from '@/components/base/BaseSpinner.vue';
// import BaseDialog from '@/components/base/BaseDialog.vue';
const BaseDialog = defineAsyncComponent(
  () => import('@/components/base/BaseDialog.vue')
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinnner);
app.component('base-dialog', BaseDialog);

app.mount('#app');
