import { defineStore } from 'pinia';
import { ref } from 'vue';

// export const useUsersStore = defineStore('users', () => {
//   const isLoggedIn = ref(false);

//   function login() {
//     isLoggedIn.value = true;
//   }

//   function logout() {
//     isLoggedIn.value = false;
//   }

//   return {
//     isLoggedIn,
//     login,
//     logout,
//   };
// });

export const useUsersStore = defineStore('users', {
  state: () => ({ isLoggedIn: false }),

  actions: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
});
