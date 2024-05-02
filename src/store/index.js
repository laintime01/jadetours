import { createStore } from 'vuex';
import {loginApi,logoutApi} from "@/api/auth.js";

const store = createStore({
  state: {
    isAuthenticated: false,
    token : localStorage.getItem('token') || null,
    error: null
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token');
        state.isAuthenticated = true;
      }else{
        state.token = null;
        state.isAuthenticated = false;
      }
    },
    setToken(state, token){
      localStorage.setItem('token', token);
      state.token = token;
      state.isAuthenticated = true;
    },
    clearToken(state){
      localStorage.removeItem('token');
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
        if(response.status ===200 && response.data.token){
          commit('setToken', response.data.token);
          commit('setisAuthenticated', true);
          commit('setError', null);
        }else{
          commit('isAuthenticated', false);
          commit('setError', 'Login failed!');
          throw new Error('Login failed!');
        }
      } catch (error) {
        commit('setisAuthenticated', false);
        commit('setError', error.message || 'Login failed, please try again later!');
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

store.commit('initializeStore');

export default store;
