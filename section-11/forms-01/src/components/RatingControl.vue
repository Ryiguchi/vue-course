<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }" @click="activate('poor')">
      <button type="button">Poor</button>
    </li>
    <li
      :class="{ active: modelValue === 'average' }"
      @click="activate('average')"
    >
      <button type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }" @click="activate('great')">
      <button type="button">Great</button>
    </li>
  </ul>
</template>

<!-- If you want to use v-model on a custom component, you have to 1. have the "modelValue" prop set to the computed property so the parent can set the value (if you use data, the value won't be updated) and 2. emit the "update:modelValue" event. You can also just use modelValue in the template as it is here. -->
<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // computed: {
  //   aciveOption() {
  //     this.modelValue;
  //   },
  // },
  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
