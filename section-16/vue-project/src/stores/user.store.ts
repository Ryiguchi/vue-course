import { defineStore } from 'pinia';
import { useCoachesStore } from './coaches.store';

let timer: NodeJS.Timeout;

export const useUserStore = defineStore('user', {
  state() {
    return {
      userId: null as string | null,
      token: null as string | null,
      error: null as Error | null,
      isLoading: false,
      isSuccess: false,
      didAutoLogout: false,
    };
  },

  getters: {
    isCoach(state) {
      return useCoachesStore().coaches.some(coach => coach.id === state.userId);
    },

    isAuthenticated(state) {
      return !!state.token;
    },
  },

  actions: {
    setUser(authenticatedUserData: IAuthenticatedUserData) {
      this.didAutoLogout = false;
      this.userId = authenticatedUserData.localId;
      this.token = authenticatedUserData.idToken;
    },

    async login(signupFormData: ISignupFormData) {
      const url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDqlv5Y-kq7INLnKt5cDRLnGPjsh8CIsY4';

      this.auth(signupFormData, url);
    },

    async signup(signupFormData: ISignupFormData) {
      const url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqlv5Y-kq7INLnKt5cDRLnGPjsh8CIsY4';

      this.auth(signupFormData, url);
    },

    async auth(signupFormData: ISignupFormData, url: string) {
      this.isLoading = true;
      this.isSuccess = false;

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ ...signupFormData, returnSecureToken: true }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.error.message || 'Failed to authenticate'
        );
        this.error = error;
        this.isLoading = false;
        return;
      }

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem('idToken', responseData.idToken);
      localStorage.setItem('localId', responseData.localId);
      localStorage.setItem('tokenExpiration', expirationDate.toString());

      timer = setTimeout(() => {
        this.autoLogout();
      }, expiresIn);

      this.setUser(responseData as IAuthenticatedUserData);
      this.isLoading = false;
      this.isSuccess = true;
    },

    checkLogin() {
      const idToken = localStorage.getItem('idToken');
      const localId = localStorage.getItem('localId');
      const tokenExpiration = localStorage.getItem('tokenExpiration');

      const expiresIn = tokenExpiration
        ? +tokenExpiration - new Date().getTime()
        : -1;

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(() => {
        this.autoLogout();
      }, expiresIn);

      if (idToken && localId && tokenExpiration) {
        this.setUser({ idToken, localId, expiresIn: 'null' });
      }
    },

    logout() {
      localStorage.removeItem('idToken');
      localStorage.removeItem('localId');
      localStorage.removeItem('tokenExpiration');

      this.userId = null;
      this.token = null;

      clearTimeout(timer);
    },

    autoLogout() {
      this.logout();
      this.didAutoLogout = true;
    },
  },
});
