import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nodejs-upload-files.herokuapp.com',
});

export default api;
