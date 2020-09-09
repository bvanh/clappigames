// import Cookies from 'js-cookie'
import Vue from "vue";
const cookieService = {
  setToken: (token, accessToken) => {
    Vue.$cookies.set("tokenClappi", token, { expires: 60, secure: true });
    Vue.$cookies.set("accessTokenClappi", accessToken, { secure: true });
  },
  getAccessToken: () => {
    return Vue.$cookies.get("accessTokenClappi");
  },
  getToken: () => {
    if (Vue.$cookies.get("tokenClappi")) {
      return Vue.$cookies.get("tokenClappi");
    } else {
      return false;
    }
  },
  resetToken: () => {
    Vue.$cookies.remove("tokenClappi");
    Vue.$cookies.remove("accessTokenClappi");
  },
};

export default cookieService;
