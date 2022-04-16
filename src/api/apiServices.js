import axios from 'axios';

const apiUrl = 'https://api.covid19tracking.narrativa.com/api/';

const apiGetAll = async (date) => {
  try {
    const response = await axios.get(`${apiUrl}${date}`);
    return response;
  } catch (error) {
    return error;
  }
};

const apiStoreService = {
  apiGetAll,
};
export default apiStoreService;
