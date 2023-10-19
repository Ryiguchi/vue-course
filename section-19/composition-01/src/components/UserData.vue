<script setup>
import { computed, useSlots, useAttrs, inject } from 'vue';

const props = defineProps(['firstName', 'lastName']);
const age = inject('userAge');

const emit = defineEmits(['custom-emit']);
const slots = useSlots();
const atts = useAttrs();

const fullName = computed(() => props.firstName + ' ' + props.lastName);
</script>

<template>
  <h2>{{ fullName }}</h2>
  <h3>{{ age }}</h3>
</template>

<!-- <script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    // const { firstName, lastName } = props; // doesn't work!!
    const fullName = computed(() => props.firstName + ' ' + props.lastName);
    const age = inject('userAge');

    // context.emit('custom-emit')

    return {
      fullName,
      age,
    };
  },
};
</script> -->

<style scoped></style>
