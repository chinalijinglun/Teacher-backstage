import axios from 'axios';
import { baseApiUrl,whiltApi } from '@/config/config';
import { Message } from 'element-ui';
import store from '@/store';
import router from '@/router';

const baseAxios = axios.create({
  baseURL: baseApiUrl,
  headers: {
    Accept: 'application/json; charset=utf-8'
  }
});

baseAxios.interceptors.request.use(config => {
  if(whiltApi.indexOf(config.url)!==-1 || !store.state.auth.authorization) {
    config.headers['authorization'] = '';
  } else {
    config.headers['authorization'] = store.state.auth.authorization
  }
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
  if(error.response && error.response.status === 401) {
    router.push('/login');
    return Promise.reject(error);
  }
  return Promise.reject(error);
});

export {
  axios,
  baseAxios,
  baseApiUrl
};
