import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from '../pages/TeamsList.vue';
import UsersList from '../pages/UsersList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import NotFound from '../pages/NotFound.vue';
import UsersFooter from '../pages/UsersFooter.vue';
import TeamsFooter from '../pages/TeamsFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      // alias: '/', // doesn't change the url like a redirect does
      // For nested routes, must add another router-view in the parent component
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      name: 'users',
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('entering users');
        next();
      },
    },

    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  // linkActiveClass: 'active',
  // linkExactActiveClass: 'exact',
  scrollBehavior(to, from, savedPosition) {
    // saved position is null if it's a new page.  If you go back, there is a saved position
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

// Global Navigation guard
router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    console.log('needs auth');
  } else {
    console.log("doesn't need auth");
  }
  next(); // to allow the navigation
  // next(false) // to not allow the navigation
  // next({ name: 'team-members', params: { teamId: 't2' } }) // to redirect to speccific route and set params
});

// Global After Each
router.afterEach((to, from) => {
  // send analytics data
  console.log('Leaving route');
});

export default router;
