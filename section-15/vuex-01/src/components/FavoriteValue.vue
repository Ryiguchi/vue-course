<script setup></script>

<template>
  <h3>{{ normalizedCounter }}</h3>
  <p>We do more ...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    // doubleCounter() {
    //   return this.$store.getters['counter/doubleCounter'];
    // },
    // normalizedCounter() {
    //   return this.$store.getters['counter/normalizedCounter'];
    // },
    ...mapGetters('counter', ['doubleCounter', 'normalizedCounter']),
  },
};
</script>
