const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('before Create');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('before mount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('before update');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('before unmount');
  },
  unmounted() {
    console.log('unmounted');
  },
});

app.mount('#app');

const data = {
  message: 'Hello!',
  longMessage: 'World',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + 'world';
    }
  },
};

const proxy = new Proxy(data, handler);

// console.log(proxy.message);
proxy.message = 'Hello!!!!!';
console.log(proxy.longMessage);
