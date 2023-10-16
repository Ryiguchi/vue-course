const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      // fullName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) this.counter = 0;
    },
    // name(value, oldValue) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + value;
    //   }
    // },
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') return '';
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    },
    addName(event, lastName) {
      this.name = event.target.value;
      // this.name = `${event.target.value} ${lastName}`;
    },
    submitForm() {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      if (this.name === '') return '';
      return this.name + ' ' + 'Iguchi';
    },
  },
});

app.mount('#events');
