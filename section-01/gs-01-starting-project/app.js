Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
  },
}).mount('#app');

// const goalInput = document.querySelector('input');
// const button = document.querySelector('button');

// const list = document.querySelector('ul');

// button.addEventListener('click', e => {
//   const goal = goalInput.value;

//   const listEl = document.createElement('li');
//   listEl.textContent = goal;

//   list.insertAdjacentElement('afterbegin', listEl);
// });
