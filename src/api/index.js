import * as auth from './auth';
import ApiShell from '@/utils/api-shell';
import Vue from 'vue'

const apiShell = new ApiShell({
  api: {
    ...auth
  }
})
apiShell.addRequestInteraptor(function(config) {
  console.log('pre fetch')
  return config;
})
apiShell.addResponseInteraptor(function(resp) {
  console.log('after fetch')
  return resp
})
export default apiShell;
