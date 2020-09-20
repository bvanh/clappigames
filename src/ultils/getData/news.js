import { baseApi } from "../../api/baseApi";

const getNews = (thisObj, path, params) => {
  baseApi
    .get(path, { params })
    .then((response) => {
      thisObj.listNews = response.data.content;
      thisObj.totalNews=response.data.totalElements;
      console.log(response);
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
const getNewsDetail = (thisObj, path) => {
  baseApi
    .get(path)
    .then((response) => {
      thisObj.news = response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
export { getNews, getNewsDetail };
