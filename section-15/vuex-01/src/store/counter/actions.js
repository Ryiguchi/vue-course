export const counterActions = {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context.state.counter);
    // dispatch another action inside of an action
    context.dispatch('increment');
    setTimeout(() => {
      context.commit('increase', payload);
    }, 2000);
  },
};
