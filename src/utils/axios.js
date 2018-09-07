import axios from 'axios';
import { baseApiUrl,whiltApi } from '@/config/config';
import { Message,Loading } from 'element-ui';
import store from '@/store';
import router from '@/router';

const baseAxios = axios.create({
  baseURL: baseApiUrl,
  headers: {
    Accept: 'application/json; charset=utf-8'
  }
});

let requestCount = 0;

baseAxios.interceptors.request.use(config => {
  requestCount++;
  Loading.service({ fullscreen: true })
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
  setTimeout(_ => {
    requestCount--;
    if (requestCount <= 0) {
      Loading.service().close()
    }
  }, 50)
  return resp;
}, error => {
  setTimeout(_ => {
    requestCount--;
    if (requestCount <= 0) {
      Loading.service().close()
    }
  }, 50)
  if(error.response) {
    if(error.response && error.response.data) {
      Message.error(error.response.data.error || error.response.data.message || '系统异常！');
    }
    if(error.response.status === 401) {
      router.push('/login');
      return Promise.reject(error);
    }
  } else {
    Message.error('系统异常！');
  }
  return Promise.reject(error);
});

export {
  axios,
  baseAxios,
  baseApiUrl
};
