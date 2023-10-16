const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      taskListIsVisible: true,
    };
  },
  computed: {
    hideButtonText() {
      return this.taskListIsVisible ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount('#assignment');
