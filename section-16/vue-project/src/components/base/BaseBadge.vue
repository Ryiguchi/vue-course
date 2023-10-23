<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  type?: string;
  title: string;
}

const { type, title } = withDefaults(defineProps<IProps>(), {
  type: 'frontend',
});

const text = computed(() => title.toUpperCase());
</script>

<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<!-- <script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: false,
      default: 'frontend',
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
});
</script> -->

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
