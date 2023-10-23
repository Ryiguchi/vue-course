<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

import { useUserStore } from './stores/user.store';

import TheHeader from './components/layout/TheHeader.vue';

const userStore = useUserStore();
const router = useRouter();

const { didAutoLogout } = storeToRefs(userStore);
const { checkLogin } = userStore;

watch(didAutoLogout, (newValue, oldValue) => {
  if (newValue && newValue !== oldValue) {
    router.replace('/coaches');
  }
});

onMounted(() => {
  checkLogin();
});
</script>

<template>
  <TheHeader />
  <RouterView v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </RouterView>
</template>

<!-- <script lang="ts">
import TheHeader from './components/layout/TheHeader.vue';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from './stores/user.store';

export default {
  components: {
    TheHeader,
  },

  computed: {
    ...mapState(useUserStore, ['didAutoLogout']),
  },

  created() {
    this.checkLogin();
  },

  watch: {
    didAutoLogout(value, oldValue) {
      if (value && value !== oldValue) {
        this.$router.replace('/coaches');
      }
    },
  },

  methods: {
    ...mapActions(useUserStore, ['checkLogin']),
  },
};

</script> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
