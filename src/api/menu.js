import { baseAxios } from '@/utils/axios';
import store from '@/store';

export const apiMenuGet = param => baseAxios.get('/api/v1/menu');
