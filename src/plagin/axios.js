/**
 * 对axios进行配置
 */

import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://open.duyiedu.com',
    params :{
        appkey,
    }
  });
const appkey ='QXD_QiXiaoDong_1553869605759';

instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config = {
        ...config,
        params :{
            appkey,
        }
    }
    return config;
})


export const mockInstance = axios.create({
    baseURL: '/mock/',
});

export default instance;

