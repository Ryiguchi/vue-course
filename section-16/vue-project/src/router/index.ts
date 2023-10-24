import { createRouter, createWebHistory } from 'vue-router';

import CoachesListView from '../views/coaches/CoachesListView.vue';
// import CoachDetailsView from '../views/coaches/CoachDetailsView.vue';

import { useUserStore } from '@/stores/user.store';

const CoachDetailsView = () => import('@/views/coaches/CoachDetailsView.vue');

const CoachRegistrationView = () =>
  import('@/views/coaches/CoachRegistrationView.vue');

const ContactCoachView = () => import('@/views/requests/ContactCoachView.vue');

const RequestsReceivedView = () =>
  import('@/views/requests/RequestsReceivedView.vue');

const UserAuth = () => import('@/views/auth/UserAuth.vue');

const NotFound = () => import('@/views/NotFound.vue');

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
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceivedView,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: { requiresUnauth: true },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  const { isAuthenticated } = useUserStore();
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
