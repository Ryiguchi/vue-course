<script setup>
import { useStore } from '../main';

const { increment } = useStore();
</script>

<template>
  <button @click="increment">Increment</button>
</template>

<!-- <script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    function inc() {
      store.dispatch('increment');
    }

    return { inc };
  },
};
</script> -->
