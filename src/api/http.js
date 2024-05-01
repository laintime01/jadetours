import axios from 'axios';
import store from '@/store';

const baseUrl = 'http://localhost:8000';

const http = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
});

http.interceptors.request.use(config=>{
  const token = store.getters['auth/token'];
  if(token){
    config.headers.Authorization = `Bearer ${token}`;
}
  return config;
});

http.interceptors.response.use(response => {
  return response;
}, error => {
  // check if the error is from the response
  if (error.response) {
    // logout if error status code is 401
    if (error.response.status === 401) {
      store.dispatch('logout');
    }
  } else {
    // handle other errors
  }
  return Promise.reject(error);
});



export default http;


