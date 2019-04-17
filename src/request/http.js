import axios from 'axios'

axios.defaults.baseURL = ''     // 设置url前缀
axios.defaults.timeout = 15000  // 设置超时
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; // post请求头

axios.interceptors.request.use( // 拦截器
  config => {        
      // 每次发送请求之前判断vuex中是否存在token        
      // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
      // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
                
      return config;    
  },    
  error => {        
      return Promise.error(error);    
})
export default axios
