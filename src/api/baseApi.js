import axios from "axios";
import cookieService from "../ultils/cookieService";
import { api } from "./apiUrl";
const refreshToken = axios.create({
  baseURL: api.ROOT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
refreshToken.interceptors.request.use(
  (config) => {
    const token = cookieService.getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token.refreshToken;
      return config;
    }
  },
  (error) => {
    return error;
  }
);
const baseUpload = axios.create({
  baseURL: api.ROOT_UPLOAD,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
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
// getInfo
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
    const { status } = error.response;
    if (status !== 403) {
      return Promise.reject(error);
    }
    return refreshToken
      .post(api.REFRESH_TOKEN)
      .then((response) => {
        // console.log(response);
        const { accessToken } = response.data;
        cookieService.setAccessToken(accessToken);
        originalRequest.headers["Authorization"] = "Bearer " + accessToken;
        return axios(originalRequest);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
);
export { baseApi, baseUpload, refreshToken, baseLogin, baseGetInfoUser };
