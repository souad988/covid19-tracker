const apiUrl = 'https://api.covid19tracking.narrativa.com/api/';

const axios = require('axios');

export default axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});
