export const counterGetters = {
  testAuth(state, getters, rootState) {
    console.log(rootState.isLoggedIn);
    return rootState.isLoggedIn;
  },
  doubleCounter(state, getters) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.doubleCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;
    return finalCounter;
  },
};
