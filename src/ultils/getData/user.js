import { baseGetInfoUser } from "../../api/baseApi";
import { api } from "../../api/apiUrl";
import qs from "qs";
// import cookieService from "../cookieService";
const { UPDATE_USER, GET_INFO } = api;
const getInfoUser = (thisObj) => {
  //   const token = cookieService.getToken();
  baseGetInfoUser
    .get(GET_INFO)
    .then((response) => {
      thisObj.userInfo = response.data;
      return response;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const updateUser = (thisObj) => {
  const {
    nickname,
    dateOfBirth,
    identifyCard,
    dateOfIssue,
    gender,
    placeOfIssue,
    job,
    address,
  } = thisObj;
  const userInfo = {
    nickname: nickname,
    dateOfBirth: dateOfBirth,
    identifyCard: identifyCard,
    dateOfIssue: dateOfIssue,
    gender: gender,
    placeOfIssue: placeOfIssue,
    job: job,
    address: address,
  };
  baseGetInfoUser
    .post(UPDATE_USER, qs.stringify(userInfo))
    .then((response) => {
      thisObj.getInfo()
      return response;
    })
    .catch((err) => {
      console.loge(err);
      return err.response;
    });
};
export { getInfoUser, updateUser };
