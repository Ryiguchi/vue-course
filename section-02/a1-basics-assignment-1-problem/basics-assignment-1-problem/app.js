const app = Vue.createApp({
  data() {
    return {
      name: 'Ryan Iguchi',
      age: 45,
      image:
        'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    },
    favoriteNum() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
