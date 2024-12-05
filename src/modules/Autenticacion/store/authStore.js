import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      const response = await login(credentials);
      this.user = response.user;
      this.token = response.token;
      localStorage.setItem('authToken', this.token);
    },
    async register(userData) {
      const response = await register(userData);
      this.user = response.user;
      this.token = response.token;
      localStorage.setItem('authToken', this.token);
    },
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('authToken');
    },
  },
});
