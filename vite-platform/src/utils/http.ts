import router from '@/router';
import axios from 'axios';

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<{
      data: any;
      message: string;
      status: number;
    }>;
  }
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  // timeout: 60000
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example statuss here:
    // status == 20000: success
    // status == 50001: invalid access token
    // status == 50002: already login in other place
    // status == 50003: access token expired
    // status == 50004: invalid user (user not exist)
    // status == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data;

    if (res.status && res.status !== 200) {
      if (res.status === 401 || res.status === 3004) {
        console.log(
          router.currentRoute.value.fullPath,
          router.currentRoute.value
        );
        if (!router.currentRoute.value.query.redirect) {
          router.push(`/login?redirect=${router.currentRoute.value.fullPath}`);
        }
      } else {
        // Message({
        //   message: res.message || 'Error',
        //   type: 'error',
        //   duration: 2 * 1000,
        //   showClose: true
        // })
        alert(res.message || 'Error');
      }
      return response.data;
    }
    return response.data;
  },
  (error) => {
    alert(error.message || 'Error');
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error);
  }
);

export default service;
