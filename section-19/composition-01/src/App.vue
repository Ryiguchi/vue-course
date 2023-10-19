<template>
  <section class="container">
    <UserData :first-name="firstName" :last-name="lastName" />
    <button @click="changeAge">Increment Age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import {
  computed,
  ref,
  reactive,
  isRef,
  isReactive,
  toRefs,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData,
  },
  // "this" does not refer to the object since the setup method is executed before initialization
  setup() {
    // const userName = ref('Maximilian');
    // const userAge = ref(45);

    const userAge = ref(45);
    provide('userAge', userAge);
    // const name = computed(() => user.value.name);
    // const age = computed(() => user.value.age);

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const fullName = computed(() => firstName.value + ' ' + lastName.value);

    watch([userAge, fullName], function (newValues, oldValues) {
      console.log('old age: ', oldValues[0]);
      console.log('new age: ', newValues[0]);
      console.log('old name: ', oldValues[1]);
      console.log('new name: ', newValues[1]);
    });

    onBeforeMount(() => {
      console.log('Before mount');
    });

    // console.log(isRef(user.name)); // false

    // const userRefs = toRefs(user);

    // console.log(isRef(userRefs.name)); // true

    // setTimeout(() => {
    //   user.name = 'Tamis';
    //   user.age = 42;
    // }, 2000);

    // functions
    function changeAge() {
      userAge.value++;
    }

    // REFS on an element
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    // function setFirstName(e) {
    //   firstName.value = e.target.value;
    // }

    // function setLastName(e) {
    //   lastName.value = e.target.value;
    // }

    return {
      userAge,
      fullName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
      changeAge,
      // setFirstName,
      // setLastName,
      // name: userRefs.name,
      // age: userRefs.age,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
