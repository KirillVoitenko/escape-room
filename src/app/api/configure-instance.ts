import { AxiosInstance } from 'axios';
import { requestHeadersInterceptor, responseErrorInterceptor } from './interceptors';

export const configureAxiosInstance = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(...requestHeadersInterceptor);
  instance.interceptors.response.use(...responseErrorInterceptor);

  return instance;
};
