import axios from 'axios';
import Cookies from 'js-cookie';
import router from './router';

const instance = axios.create({
  baseURL: '//localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  
    const sessionToken = Cookies.get('user_session');

    if (sessionToken) {
      config.headers.Authorization = `Bearer ${sessionToken}`;
    }
    return config;
  });

  function setCookie(name: string, value: string, options: Cookies.CookieAttributes = {}): void {
    Cookies.set(name, value, options);
  }

  instance.interceptors.response.use(response => {
    const responseData = response;

    const sessionToken = response.data.session_token;

    if (sessionToken) {
      setCookie('user_session', sessionToken, { expires: 1/24 });
    }
    return response;
  }, error => {
    if (error.response.status === 500) {

      const sessionToken = error.response.data.session_token;
      if (sessionToken) {
        setCookie('user_session', sessionToken, { expires: 1/24 });
      }

    }else if(error.response.status === 401) {

      router.push(`/login`)
      Cookies.remove('user_session');
    }
    return Promise.reject(error);
  });

export default instance;