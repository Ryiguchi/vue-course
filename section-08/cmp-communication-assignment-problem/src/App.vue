<template>
  <active-user :username="user.username" :age="user.age"></active-user>
  <user-data @handle-add-user="addUser"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'Ryan',
        age: 45,
      },
    };
  },
  methods: {
    addUser(name, age) {
      this.user = { username: name, age };
    },
  },
};
</script>
