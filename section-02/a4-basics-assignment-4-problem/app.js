const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      visible: true,
      backgroundColor: '',
    };
  },
  computed: {
    pClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },
  methods: {
    togglePar() {
      this.visible = !this.visible;
    },
  },
});

app.mount('#assignment');
