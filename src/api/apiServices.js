import http from './api';

const apiGetAll = () => http.get('2022-04-12');
// const apiGetByCity = (lat,lon) => http.get('lat='+lat+'&lon='+lon+'&appid='+apiKey)

const apiStoreService = {
  apiGetAll,
};
export default apiStoreService;
