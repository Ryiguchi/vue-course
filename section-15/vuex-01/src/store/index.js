import { createStore } from 'vuex';

import counterModule from './counter';

import { rootActions } from './actions';
import { rootMutations } from './mutations';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },

  actions: rootActions,
  mutations: rootMutations,
});

export default store;
