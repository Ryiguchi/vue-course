import { createRouter, createWebHistory } from 'vue-router';

import CoachesListView from '../views/coaches/CoachesListView.vue';
import CoachDetailsView from '../views/coaches/CoachDetailsView.vue';
import CoachRegistrationView from '../views/coaches/CoachRegistrationView.vue';
import ContactCoachView from '../views/requests/ContactCoachView.vue';
import RequestsReceivedView from '../views/requests/RequestsReceivedView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesListView,
    },
    {
      path: '/coaches/:id',
      component: CoachDetailsView,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoachView,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistrationView,
    },
    {
      path: '/requests',
      component: RequestsReceivedView,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
