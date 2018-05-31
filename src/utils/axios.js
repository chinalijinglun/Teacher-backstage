import axios from 'axios';
import { baseApiUrl } from '@/config/config';

const baseAxios = axios.create({
  baseURL: baseApiUrl,
  headers: { Accept: 'application/json; charset=utf-8' }
});

export {
  axios,
  baseAxios,
  baseApiUrl
}
