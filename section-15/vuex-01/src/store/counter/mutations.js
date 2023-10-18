export const counterMutations = {
  increment(state) {
    state.counter++;
  },
  increase(state, payload) {
    console.log(state);
    state.counter += payload.value;
  },
};
