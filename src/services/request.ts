import axios from 'axios';
import { API_PERM_URL, API_URL } from '../configs/app.config';
import { getStorage, setStorage } from '../utils/local-storage';
import { ITokenRes } from '../types/auth.types';

const request = axios.create({
  baseURL: API_URL,
});

request.interceptors.request.use(
  (config) => {
    const accessToken = getStorage('accessToken');
    if (config.headers && accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        const response = await axios.get<ITokenRes>(`${API_PERM_URL}/refresh`, {
          headers: {
            // 'Content-type': 'application/json',
            // Accept: 'application/json',
            refresh_token: `${getStorage('refreshToken')}`,
          },
        });
        setStorage('accessToken', response.data.accessToken);
        setStorage('refreshToken', response.data.refreshToken);
        return request.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  }
);

export default request;
