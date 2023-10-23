import { defineStore } from 'pinia';

import { coachesData } from '@/lib/data/data';
import { useUserStore } from './user.store';

export const useCoachesStore = defineStore('coaches', {
  state() {
    return {
      coaches: coachesData,
      isLoading: false,
      error: null as Error | null,
      lastFetch: 0,
    };
  },

  getters: {
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
  },

  actions: {
    shouldUpdate() {
      const timestamp = Date.now();

      if (timestamp - this.lastFetch < 60 * 1000) {
        return false;
      } else {
        this.setFetchTimestamp(timestamp);
        return true;
      }
    },

    setFetchTimestamp(timestamp: number) {
      this.lastFetch = timestamp;
    },

    formatCoaches(data: ICoachDBData) {
      let formattedCoaches = [];

      for (const key in data) {
        const coach = {
          ...data[key],
          id: key,
        };
        formattedCoaches.push(coach);
      }
      return formattedCoaches;
    },

    formatCoachFormData(data: ICoachFormData, userId: string) {
      // format coach data
      const coachData: ICoachDataNoId = {
        firstName: data.first,
        lastName: data.last,
        description: data.desc,
        hourlyRate: data.rate,
        areas: data.areas,
      };

      return coachData;
    },

    async loadCoaches(forceRefresh: boolean = false) {
      // check if should update
      if (!forceRefresh && !this.shouldUpdate()) return;

      console.log('refresh', forceRefresh);

      //reset status
      this.isLoading = true;
      this.error = null;

      // fetch coaches
      const response = await fetch(
        `https://vue-coaches-930d2-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
      );

      // check for error
      if (!response.ok) {
        const error = new Error(response.statusText || 'Failed to fetch!');
        this.error = error;
        this.isLoading = false;
        return;
      }

      const data: ICoachDBData = await response.json();

      // format coaches
      const formattedCoaches = this.formatCoaches(data);

      // set coaches and status
      this.coaches = formattedCoaches;
      this.isLoading = false;
    },

    async addCoach(data: ICoachFormData) {
      // get user id from user store
      const userId = useUserStore().userId;

      // format form data
      const coachData = this.formatCoachFormData(data, userId);

      // send to DB
      const response = await fetch(
        `https://vue-coaches-930d2-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(coachData),
        }
      );

      // check for error
      if (response.ok) {
        console.log('error');
      }
    },
  },
});
