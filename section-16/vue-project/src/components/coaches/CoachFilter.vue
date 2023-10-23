<!-- <script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  'change-filter': [value: IFilterOptions];
}>();

const filters = ref<IFilterOptions>({
  frontend: true,
  backend: true,
  career: true,
});

function setFilter(event: Event) {
  const id = (event.target as HTMLInputElement).id;
  const isChecked = (event.target as HTMLInputElement).checked;

  const updatedFilters: IFilterOptions = {
    ...filters.value,
    [id]: isChecked,
  };

  filters.value = updatedFilters;

  emit('change-filter', updatedFilters);
}
</script> -->

<template>
  <base-card>
    <h2>Find your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script lang="ts">
export default {
  emits: ['change-filter'],

  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      } as { [key: string]: Boolean },
    };
  },

  methods: {
    setFilter(event: Event) {
      const id = (event.target as HTMLInputElement).id;
      const isChecked = (event.target as HTMLInputElement).checked;

      const updateFilters = {
        ...this.filters,
        [id]: isChecked,
      };

      this.filters = updateFilters;
      this.$emit('change-filter', updateFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
