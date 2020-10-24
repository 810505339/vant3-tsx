import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
    timeout: 10000
})


//请求拦截器
instance.interceptors.request.use((config) => {

    return config;
}, (err) => {
    // 对请求错误做些什么
    return Promise.reject(err);
})

//响应拦截器

instance.interceptors.response.use((response) => {
    return response.data;

}, (err) => {
    return Promise.resolve(err)
})

export default instance



