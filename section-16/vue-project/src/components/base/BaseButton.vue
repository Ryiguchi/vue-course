<script setup lang="ts">
interface IProps {
  link?: boolean;
  to?: string;
  mode?: string | null;
}

const { link, to, mode } = withDefaults(defineProps<IProps>(), {
  link: false,
  to: '/',
  mode: null,
});
</script>

<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <RouterLink v-else :to="to" :class="mode">
    <slot></slot>
  </RouterLink>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
    mode: {
      type: String,
      required: false,
    },
  },
});
</script> -->

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
