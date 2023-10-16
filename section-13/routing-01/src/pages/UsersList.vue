<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  // only can use with router
  data() {
    return {
      changesSaved: false,
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log('entering users from component');
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure you want to leave? You have unsaved changes!'
      );
      next(userWantsToLeave);
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      // this.$router.back();
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
