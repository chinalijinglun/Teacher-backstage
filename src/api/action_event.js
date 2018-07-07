import { baseAxios } from '@/utils/axios';
import store from '@/store';

/**
 * 
 * @param {before_state, after_state, primary_data_id, action_event_desc, action_event_type} form 
 */
export const actionEventPost = (form) => {
  form.user_type = store.state.auth.userType;
  form.created_at = new Date();
  form.user_id = store.state.auth.userId;
  form.updated_by = store.state.auth.userName;
  form.delete_flag = 1;
  form.action_event_type = form.action_event_type || 1
  return baseAxios.post('/api/v1/action_event', form);
};

export const actionEventBareGet = (params, others) => baseAxios.get('/api/v1/_bare/action_event', { params: { q: JSON.stringify(params), results_per_page: 1000, page: 1, ...others } });
