import http from "./http";

const getSettingApi = async() =>{
  try{
    const response = await http.get('/setting');
    return response.data;
  }catch(error){
    throw error.response.data;
  }
}

const updateSettingApi = async(setting) =>{
  try{
    const response = await http.put('/setting', setting);
    return response.data;
  }catch(error){
    throw error.response.data;
  }
}

export default {
  getSettingApi,
  updateSettingApi
};


