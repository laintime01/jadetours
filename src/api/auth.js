import http from "./http";

const loginApi = async (credentials) => {
  try {
    const response = await http.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const signupApi = async (credentials) => {
  try {
    const response = await http.post('/auth/signup', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logoutApi = async () => {
  try {
    const response = await http.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export default {
  loginApi,
  signupApi,
  logoutApi
};
