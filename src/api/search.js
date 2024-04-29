import http from './http';

const searchApi = async (query) => {
  try {
    const response = await http.get('/search', { params: { query } });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

export default {searchApi};
