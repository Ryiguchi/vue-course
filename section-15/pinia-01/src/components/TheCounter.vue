<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/store';

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
</script>

<template>
  <h3>{{ counter }}</h3>
</template>
