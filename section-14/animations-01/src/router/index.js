import { createRouter, createWebHistory } from 'vue-router';

import AllUsers from '../pages/AllUsers.vue';
import CourseGoals from '../pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/goals',
    },
    {
      name: 'users',
      path: '/users',
      component: AllUsers,
    },
    {
      name: 'goals',
      path: '/goals',
      component: CourseGoals,
    },
  ],
});

export default router;
