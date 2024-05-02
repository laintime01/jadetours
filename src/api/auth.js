import http from "./http";

export const loginApi = async (credentials) => {
  try {
    const response = await http.post('/auth/login', credentials);
    return response;
  } catch (error) {
    throw error.response.message;
  }
};

export const signupApi = async (credentials) => {
  try {
    const response = await http.post('/auth/signup', credentials);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    const response = await http.post('/auth/logout');
    return response.message;
  } catch (error) {
    throw error.response.message;
  }
};

