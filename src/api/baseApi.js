import axios from "axios";
import cookieService from "../ultils/cookieService";
import { api } from "./apiUrl";
import qs from 'qs'
// refreshToken
const refreshToken = axios.create({
  baseURL: api.ROOT,
});
const baseApi = axios.create({
  baseURL: api.ROOT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const baseLogin = axios.create({
  baseURL: api.ROOT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
// base
baseLogin.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);
// getInforCharacter
const baseGetInfoUser = axios.create({
  baseURL: api.ROOT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
baseGetInfoUser.interceptors.request.use(
  (config) => {
    const token = cookieService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
      return config;
    }
  },
  (error) => {
    return error;
  }
);
baseGetInfoUser.interceptors.response.use(
  (response) => {
    return response;
  },
  function(error) {
    const originalRequest = error.response.config;
    if (error.response.status !== 403) {
      // console.log(error.response);
      return Promise.reject(error);
    }
    const tokenClappi = cookieService.getToken();
    return refreshToken
      .post(api.REFRESH_TOKEN, qs.stringify({
        refreshToken: tokenClappi.refreshToken,
      }))
      .then((response) => {
        const { accessToken } = response.data;
        cookieService.set("accessTokenClappi", accessToken);
        originalRequest.headers["Authorization"] = "Bearer " + accessToken;
        return axios(originalRequest);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
);
export { baseApi, refreshToken, baseLogin, baseGetInfoUser };
