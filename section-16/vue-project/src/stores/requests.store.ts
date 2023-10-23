import { defineStore } from 'pinia';
import { useUserStore } from './user.store';

export const useRequestsStore = defineStore('requests', {
  state() {
    return {
      allRequests: [] as IRequest[],
      isLoading: false,
      error: null as Error | null,
    };
  },

  getters: {
    requests(state) {
      const coach = useUserStore().userId;
      return state.allRequests.filter(request => request.coachId === coach);
    },
    hasRequests() {
      return this.requests && this.requests.length > 0;
    },
  },

  actions: {
    async loadRequests() {
      this.isLoading = true;
      this.error = null;

      const { userId, token } = useUserStore();

      const response = await fetch(
        `https://vue-coaches-930d2-default-rtdb.europe-west1.firebasedatabase.app/requests.json?auth=${token}`
      );

      if (!response.ok) {
        const error = new Error(
          response.statusText || 'There was a problem fetching your requests!'
        );
        this.error = error;
        this.isLoading = false;
        return;
      }

      const requestData: IRequestDBData = await response.json();

      let requests: IRequest[] = [];

      for (const key in requestData) {
        if (requestData[key].coachId === userId) {
          const matchingRequest = {
            ...requestData[key],
            id: key,
          };
          requests.push(matchingRequest);
        }
      }

      this.allRequests = requests;
      this.isLoading = false;
    },

    async addRequest(requestData: IRequestNoId) {
      this.isLoading = true;
      this.error = null;

      const response = await fetch(
        `https://vue-coaches-930d2-default-rtdb.europe-west1.firebasedatabase.app/requests.json`,
        {
          method: 'POST',
          body: JSON.stringify(requestData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const error = new Error(
          response.statusText || 'There was a problem sending your request!'
        );
        this.error = error;
      }

      this.isLoading = false;

      // this.allRequests.push(newRequest);
    },
  },
});
