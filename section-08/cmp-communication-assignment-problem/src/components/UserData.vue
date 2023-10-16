<template>
  <form @submit.prevent="$emit('handle-add-user', name, +age)">
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" max="120" min="0" v-model="age" />
    </div>
    <div>
      <button>Add User</button>
    </div>
  </form>
</template>

<script>
export default {
  emit: ['handle-add-user'],
  data() {
    return {
      name: '',
      age: 0,
    };
  },
};
</script>
