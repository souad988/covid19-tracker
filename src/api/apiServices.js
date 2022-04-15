const apiUrl = 'https://api.covid19tracking.narrativa.com/api/';

import axios from 'axios';

const apiGetAll = async() =>{
  try {    
      const response = await axios.get(apiUrl+'2022-04-12');
    return response;
  } catch (error) {
    return error
  }
} 

const apiStoreService = {
  apiGetAll,
};
export default apiStoreService;
