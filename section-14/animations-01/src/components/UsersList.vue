<template>
  <!-- will render an element to the dom so can specify which element or custom component to give it -->
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input v-model="userInput" type="text" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
      userInput: '',
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.userInput);
      this.userInput = '';
    },
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  border-bottom: none;
  padding: 1rem;
  text-align: center;
}

li:last-child {
  border-bottom: 1px solid #ccc;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 0.3s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 0.3s ease-in;
  /* need to add for smooth transition when removing elements */
  position: absolute;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/*  special class on ly added to transition-group */
/* Vue uses "transform" to move the elements to their new position */
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
type="text"
