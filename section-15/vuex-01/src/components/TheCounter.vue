<script setup></script>

<template>
  <h3>{{ counter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    counter() {
      return this.$store.state.counter.counter;
    },
    // ACcess the getters in your store
    ...mapGetters('counter', ['doubleCounter', 'normalizedCounter']),
  },
};
</script>
