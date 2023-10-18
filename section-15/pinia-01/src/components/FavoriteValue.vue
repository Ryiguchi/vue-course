<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/store';

const counterStore = useCounterStore();

const { normalizedCounter } = storeToRefs(counterStore);
</script>

<template>
  <h3>{{ normalizedCounter }}</h3>
  <p>We do more ...</p>
  <button @click="counterStore.$reset">Reset</button>
</template>
