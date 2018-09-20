import { baseAxios, axios } from '@/utils/axios';
import { DELETE_FLAG, COUNTRY_IDS } from "../utils/enums";
import { json2filter } from "../utils/json2filter";

export const regionPost = (form) => baseAxios.post('/api/v1/region', form);

export const regionDeleteById = (id) => regionPutById(id, {delete_flag: DELETE_FLAG.DELETED});

export const regionGetById = (id) => baseAxios.get(`/api/v1/region/${id}`);

export const regionPutById = (id, form) => baseAxios.put(`/api/v1/region/${id}`, form);

export const regionBareGet = (params, others) => baseAxios.get('/api/v1/_bare/region', { params: { q: JSON.stringify(params), page: 1, results_per_page: 1000, ...others } });

export const regionBareGetById = (id) => baseAxios.get(`/api/v1/_bare/region/${id}`);

export const mangerStaffQuery = form => baseAxios.post('/manger/staff_query', form);

// export const getCountry = () => regionBareGet(json2filter({id: COUNTRY_IDS}));

export const getRegionByPid = (id) => regionBareGet(json2filter({pid: [id]}));

export const getCountry = () => axios.get('/static/country.json').then(resp => {
  return resp.data.sort((a, b) => {
    if(COUNTRY_IDS.indexOf(a.id) !== -1) {
      return -1
    } else if(COUNTRY_IDS.indexOf(b.id) !== -1) {
      return 1
    } else if(a.name_zh < b.name_zh) {
      return -1
    } else if(a.name_zh === b.name_zh) {
      return 0
    } else {
      return 1
    }
  })
});
