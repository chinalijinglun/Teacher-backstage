import { baseAxios } from '@/utils/axios';
import { DELETE_FLAG } from "../utils/enums";

export const regionPost = (form) => baseAxios.post('/api/v1/region', form);

export const regionDeleteById = (id) => regionPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const regionGetById = (id) => baseAxios.get(`/api/v1/region/${id}`);

export const regionPutById = (id, form) => baseAxios.put(`/api/v1/region/${id}`, form);

export const regionBareGet = (params, others) => baseAxios.get('/api/v1/_bare/region', { params: { q: JSON.stringify(params), page: 1, results_per_page: 1000, ...others } });

export const regionBareGetById = (id) => baseAxios.get(`/api/v1/_bare/region/${id}`);

export const mangerStaffQuery = form => baseAxios.post('/manger/staff_query', form);

export const getCountry = () => regionBareGet(json2filter({id: COUNTRY_IDS}));

export const getRegionByPid = (id) => regionBareGet(json2filter({pid: [id]}));
