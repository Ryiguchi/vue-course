const app = Vue.createApp({
  data() {
    return {
      total: 0,
      timer: null,
    };
  },
  watch: {
    total(value) {
      if (this.timer) clearTimeout(this.timer);

      if (value !== 0) {
        this.timer = setTimeout(() => {
          console.log('DONE');
          this.total = 0;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.total === 37) {
        return 'You got 37!!!';
      } else if (this.total > '37') {
        return 'Too much!';
      } else {
        return 'Not there yet!';
      }
    },
  },
  methods: {
    addFive() {
      this.total += 5;
    },
    addOne() {
      this.total++;
    },
  },
});

app.mount('#assignment');
