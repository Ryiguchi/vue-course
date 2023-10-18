<script setup>
import TheCounter from './components/TheCounter.vue';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
</script>

<template>
  <BaseContainer title="Vuex" v-if="isAuth">
    <TheCounter />
    <FavoriteValue />
    <button @click="inc({ value: 20 })">Add 20</button>
    <ChangeCounter />
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth />
  </BaseContainer>
  <h2>{{ testAuth }}</h2>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    isAuth() {
      return this.$store.state.isLoggedIn;
    },
    testAuth() {
      console.log(this.$store.getters['counter/testAuth']);

      return this.$store.getters['counter/testAuth'];
    },
  },
  methods: {
    // addOne() {
    //   // this.$store.dispatch('increase', { value: 10 });
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    // ...mapActions('counter', ['increase', 'increment']),
    ...mapActions('counter', {
      int: 'increment',
      inc: 'increase',
    }),
  },
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
</style>
