<script setup>
import { storeToRefs } from 'pinia';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { useCounterStore } from './store/store';
import { useAuthStore } from './store/store';

// Options Store
const counterStore = useCounterStore();
const authStore = useAuthStore();

const { doubleCounter, testAuth } = storeToRefs(counterStore);
console.log(testAuth);

const { isLoggedIn } = storeToRefs(authStore);

const { increment, increase } = counterStore;
</script>

<template>
  <BaseContainer title="Vuex" v-if="isLoggedIn">
    <FavoriteValue />
    <TheCounter />
    <h3>{{ doubleCounter }}</h3>
    <button @click="increment">Add 1</button>
    <button @click="increase(10)">Add 10</button>
  </BaseContainer>
  <BaseContainer title="auth">
    <UserAuth />
  </BaseContainer>
  <h2>{{ testAuth }}</h2>
</template>

<script>
export default {};
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
