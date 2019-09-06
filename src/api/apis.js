import axios from './https.js';
//注册
export let add = (opts) =>{ // opts={username:xxx,password:xxx}
  return axios.post('/api/Forms/api_form_add',opts);
}
