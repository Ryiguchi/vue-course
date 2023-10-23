import { defineStore } from 'pinia';
import { useCoachesStore } from './coaches.store';

export const useUserStore = defineStore('user', {
  state() {
    return {
      userId: 'c1',
    };
  },

  getters: {
    isCoach(state) {
      return useCoachesStore().coaches.some(coach => coach.id === state.userId);
    },
  },
});
