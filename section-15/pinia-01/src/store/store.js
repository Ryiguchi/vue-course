import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter', {
  state: () => ({ counter: 0 }),

  getters: {
    doubleCounter() {
      return this.counter * 2;
    },
    normalizedCounter() {
      const doubleCounter = this.doubleCounter;
      if (doubleCounter < 0) return 0;
      if (doubleCounter > 100) return 100;
      return doubleCounter;
    },
    testAuth() {
      const authStore = useAuthStore();
      return authStore.isLoggedIn;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    increase(num) {
      this.increment();
      setTimeout(() => {
        this.counter += num;
      }, 2000);
    },
  },
});

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
  }),

  actions: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
});

// export const useCounterStore = defineStore('counter', () => {
//   const counter = ref(0);

//   const doubleCounter = computed(() => counter.value * 2);

//   const normalizedCounter = computed(() => {
//     const double = doubleCounter.value;
//     if (double < 0) return 0;
//     if (double > 100) return 100;
//     return double;
//   });

//   const testAuth = computed(() => {
//     const authStore = useAuthStore();
//     return authStore.isLoggedIn;
//   });

//   function increment() {
//     counter.value++;
//   }

//   function increase(num) {
//     // call another "mutation" inside of a "mutation"
//     increment();
//     setTimeout(() => {
//       counter.value += +num;
//     }, 2000);
//   }

//   function $reset() {
//     counter.value = 0;
//   }

//   return {
//     counter,
//     testAuth,
//     increment,
//     increase,
//     doubleCounter,
//     normalizedCounter,
//     $reset,
//   };
// });

// export const useAuthStore = defineStore('auth', () => {
//   const isLoggedIn = ref(false);

//   function login() {
//     isLoggedIn.value = true;
//   }

//   function logout() {
//     isLoggedIn.value = false;
//   }

//   function $reset() {
//     isLoggedIn.value = false;
//   }

//   return {
//     isLoggedIn,
//     login,
//     logout,
//     $reset,
//   };
// });
