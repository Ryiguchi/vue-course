const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: [],
    };
  },
  methods: {
    addGoal(event) {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount('#user-goals');
