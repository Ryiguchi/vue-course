<script setup>
import TheHeader from './components/nav/TheHeader.vue';
</script>

<template>
  <TheHeader />
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
