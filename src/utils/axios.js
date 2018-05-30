import axios from 'axios';
import { baseApiUrl } from '@/config/config';

const baseAxios = axios.create({
  baseURL: baseApiUrl
});

export {
  axios,
  baseAxios,
  baseApiUrl
}
