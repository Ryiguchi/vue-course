import { counterGetters } from './getters';
import { counterActions } from './actions';
import { counterMutations } from './mutations';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },

  getters: counterGetters,

  actions: counterActions,

  mutations: counterMutations,
};

export default counterModule;
