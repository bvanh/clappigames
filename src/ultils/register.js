import { baseLogin } from "../api/baseApi";
import { api } from "../api/apiUrl";
import qs from "qs";
import cookieService from "./cookieService";
import { partnerId } from "./valDefault";
const register = (thisObj, params, username) => {
  return baseLogin
    .post(api.REGISTER_USER, qs.stringify({ ...params, partnerId: partnerId }))
    .then((response) => {
      console.log(response);
      const { data } = response;
      cookieService.setToken({ ...data, username: username }, data.accessToken);
      thisObj.$store.dispatch("login");
      return response;
    })
    .catch((error) => {
      console.log(error.response.data);
      const { status, title, message } = error.response.data;
      const newStatus = {
        val: title.toLowerCase(),
        help: message,
      };
      switch (status) {
        case 1005:
          thisObj.statusUser = newStatus;
          return;
        case 1006:
          thisObj.statusPwd = newStatus;
          return;
        default:
          // thisObj.statusPwd = newStatus;
          return;
      }
    });
};
export { register };
