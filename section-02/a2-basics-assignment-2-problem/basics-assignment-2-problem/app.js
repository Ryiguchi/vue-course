const app = Vue.createApp({
  data() {
    return {
      output: '',
      confirmedOutput: '',
    };
  },
  methods: {
    showAlert() {
      alert('The button has been pressed!');
    },
    setOutput(event) {
      this.output = event.target.value;
    },
    confirmOutput() {
      this.confirmedOutput = this.output;
    },
  },
});

app.mount('#assignment');
