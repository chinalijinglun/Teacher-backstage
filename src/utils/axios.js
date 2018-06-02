import axios from 'axios';
import { baseApiUrl } from '@/config/config';
import { Message } from 'element-ui';
import store from '@/store';

const baseAxios = axios.create({
  baseURL: baseApiUrl,
  headers: { Accept: 'application/json; charset=utf-8' }
});

baseAxios.interceptors.request.use(config => {
  // config.headers['authorization'] = store.state.auth.authorization;
  return config;
}, error => {
  return Promise.reject(error);
});

baseAxios.interceptors.response.use(resp => {
  return resp;
}, error => {
  if(error.response && error.response.data) {
    Message.error(error.response.data.message);
  }
  return Promise.reject(error);
});

export {
  axios,
  baseAxios,
  baseApiUrl
};
