import * as auth from './auth';
import ApiShell from '@/utils/api-shell';
import Vue from 'vue'

const apiShell = new ApiShell({
  api: {
    ...auth
  }
})
apiShell.addRequestInteraptor(function() {
  console.log('pre fetch')
})
apiShell.addReponseInteraptor(function() {
  console.log('after fetch')
})
export default apiShell;
