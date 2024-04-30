import axios from 'axios';
import store from '@/store';

const baseUrl = 'http://localhost:3001/api';

const http = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

http.interceptors.request.use(config=>{
  const token = store.getters['auth/token'];
  if(token){
    config.headers.Authorization = `Bearer ${token}`;
}
  return config;
});

http.interceptors.response.use(response=>{
  return response;
}
  , error=>{
  if(error.response.status === 401){
    store.dispatch('logout');
  }
  return Promise.reject(error);
});


export default http;


