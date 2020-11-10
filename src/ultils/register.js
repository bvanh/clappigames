import { baseLogin } from "../api/baseApi";
import { api } from "../api/apiUrl";
import qs from "qs";
import cookieService from "./cookieService";
import { partnerId, avatar } from "./valDefault";
const register = (thisObj, params, username) => {
  return baseLogin
    .post(
      api.REGISTER_USER,
      qs.stringify({ ...params, partnerId: partnerId, os: "web" })
    )
    .then((response) => {
      //console.log(response);
      const { data } = response;
      cookieService.setToken(
        { ...data, username: username, avatar: avatar, noSocial: true },
        data.accessToken
      );
      thisObj.$store.dispatch("login");
      thisObj.isRegisSuccess = true;
      return response;
    })
    .catch((error) => {
      //console.log(error.response.data);
      const { status, title, message } = error.response.data;
      const newStatus = {
        val: title.toLowerCase(),
        help: message,
      };
      switch (status) {
        case 1005:
        case 1014:
          thisObj.statusUser = newStatus;
          return;
        case 1006:
          thisObj.statusPwd = newStatus;
          return;
        case 1058:
          thisObj.statusPhone = newStatus;
          return;
        default:
          thisObj.statusMail = newStatus;
          return;
      }
    });
};
export { register };
