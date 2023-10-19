<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from '../main';

const store = useStore();
// const { counter } = storeToRefs(store);
</script>

<template>
  <h2>{{ store.counter }}</h2>
</template>

<!-- <script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const counter = computed(() => store.getters.counter);

    return { counter };
  },
};
</script> -->
