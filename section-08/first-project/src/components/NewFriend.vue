<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Name</label>
      <input v-model="name" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="phone" type="tel" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="email" type="email" />
    </div>
    <div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    }
  },
  emits: ['add-friend'],
  methods: {
    handleSubmit() {
      const friendData = {
        id: this.name.split(' ')[0].toLowerCase(),
        name: this.name,
        phone: this.phone,
        email: this.email
      }
      this.$emit('add-friend', friendData)
    }
  }
}
</script>
