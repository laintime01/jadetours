import { createStore } from 'vuex';
import {loginApi, signupApi, logoutApi} from "@/api/auth.js";

export default createStore({
  state: {
    isAuthenticated: false,
    token : localStorage.getItem('token') || null,
    error: null
  },
  mutations: {
    setToken(state, token){
      state.token = token;
      state.isAuthenticated = true;
    },
    clearToken(state){
      state.token = null;
      state.isAuthenticated = false;
    },
    setisAuthenticated(state, isAuthenticated){
      state.isAuthenticated = isAuthenticated;
    },
    setError(state, error){
      state.error = error;
    }
  },
  actions: {
    async login({commit}, credentials){
      try {
        const response = await loginApi(credentials);
        commit('setToken', response.token);
        commit('setisAuthenticated', true);
        commit('setError', null);
      } catch (error) {
        commit('setisAuthenticated', false);
        commit('setError', error.message || 'Login failed!');
        throw error;
      }
    },
    async signup({commit}, credentials){
      try {
        const response = await signupApi(credentials);
        commit('setToken', response.token);
        commit('setisAuthenticated', true);
        commit('setError', null);
      } catch (error) {
        commit('setisAuthenticated', false);
        commit('setError', error.message || 'Signup failed!');
        throw error;
      }
    },
    async logout({commit}){
      try {
        await logoutApi();
        commit('clearToken');
        commit('setisAuthenticated', false);
        commit('setError', null);
      } catch (error) {
        commit('setError', error.message || 'Logout failed!');
        throw error;
      }
    }
  },
});
