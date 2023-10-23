<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();
const router = useRouter();

const { isAuthenticated } = storeToRefs(userStore);
const { logout } = userStore;

function handleLogout() {
  logout();
  router.replace('/coaches');
}
</script>

<template>
  <header>
    <nav>
      <h1><RouterLink to="/">Find a Coach</RouterLink></h1>
      <ul>
        <li><RouterLink to="/coaches">All Coaches</RouterLink></li>
        <li v-if="isAuthenticated">
          <RouterLink to="/requests">Requests</RouterLink>
        </li>
        <li v-else>
          <RouterLink to="/auth">Login</RouterLink>
        </li>
        <li v-if="isAuthenticated">
          <base-button @click="handleLogout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- <script lang="ts">
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user.store';

export default {
  computed: {
    ...mapState(useUserStore, ['isAuthenticated']),
  },

  methods: {
    ...mapActions(useUserStore, ['logout']),

    handleLogout() {
      this.logout();
      this.$router.replace('/coaches');
    },
  },
};
</script> -->

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
