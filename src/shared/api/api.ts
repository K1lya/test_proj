import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

const baseApiUrl = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru/123';

export const appAxios = axios.create({
  baseURL: baseApiUrl,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
  },
});
