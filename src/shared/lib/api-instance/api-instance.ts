import axios from 'axios';
import { apiConfig } from '@shared/config';

const axiosInstance = axios.create({
  baseURL: apiConfig.url
});

export const getApiInstance = () => axiosInstance;
