import { baseApi } from "../../api/baseApi";
import { api } from "../../api/apiUrl";
const { BANNERS } = api;
const getSliders = (thisObj, path, params) => {
  baseApi
    .get(path, { params })
    .then((response) => {
      thisObj.sliders = response.data;
      console.log(response);
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
const getBanners = () => {
  return baseApi
    .get(BANNERS)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export { getSliders, getBanners };
