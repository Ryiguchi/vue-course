<script setup>
import { useAuthStore } from '../store/store';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);
const { login, logout } = authStore;
</script>

<template>
  <button @click="login" v-if="!isLoggedIn">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>
