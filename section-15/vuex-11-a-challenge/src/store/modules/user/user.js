export const userModule = {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
  actions: {
    login(context) {
      context.commit('setIsLoggedIn', { value: true });
    },
    logout(context) {
      context.commit('setIsLoggedIn', {
        value: false,
      });
    },
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload.value;
    },
  },
};
