import http from "./http";

export const loginApi = async (credentials) => {
  try {
    const response = await http.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signupApi = async (credentials) => {
  try {
    const response = await http.post('/auth/signup', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutApi = async () => {
  try {
    const response = await http.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
