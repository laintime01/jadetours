import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    token : localStorage.getItem('token') || null,
  },
  mutations: {
    setToken(state, token){
      state.token = token;
      localStorage.setItem('token', token);
      state.isAuthenticated = true;
    },
    clearToken(state){
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  actions: {
    login({ commit }, token) {
      commit(setToken, token);
    },
    logout({ commit }) {
      commit('clearToken');
    },
  },
});
