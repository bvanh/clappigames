import { baseGetInfoUser, baseLogin } from "../../api/baseApi";
import { api } from "../../api/apiUrl";
import qs from "qs";
import cookieService from "../cookieService";
const {
  UPDATE_USER,
  GET_INFO,
  UPDATE_USER_PWD,
  GET_FEEDBACKS,
  RECOVERY_PWD,
} = api;
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
const getFeedbacks = (thisObj, paramsFeedbacks) => {
  const { page, count } = paramsFeedbacks;
  const params = {
    page: page,
    count: count,
  };
  baseGetInfoUser
    .get(GET_FEEDBACKS, { params })

    .then((response) => {
      // console.log(response);
      thisObj.feedbacks = response.data;
      return response;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const getFeedbackDetail = (thisObj, detailId) => {
  baseGetInfoUser
    .get(GET_FEEDBACKS + detailId)
    .then((res) => {
      // console.log(res);
      thisObj.detail = res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const updateInfoUser = (thisObj) => {
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
      thisObj.getInfo();
      return response;
    })
    .catch((err) => {
      console.loge(err);
      return err.response;
    });
};
const updatePassword = (thisObj, oldPass, newPass) => {
  const userPwd = {
    oldPassword: oldPass,
    newPassword: newPass,
  };
  baseGetInfoUser
    .post(UPDATE_USER_PWD, qs.stringify(userPwd))
    .then((response) => {
      thisObj.getInfo();
      const { status } = response;
      if (status === 200)
        thisObj.$success({
          title: "Cập nhật mật khẩu thành công!",
          okText: "Logout",
          onOk() {
            thisObj.$store.dispatch("logout");
            thisObj.$router.push("/");
            cookieService.resetToken();
          },
        });
      return response;
    })
    .catch((err) => {
      // console.log(err.response);
      const { status, title, message } = err.response.data;
      const newStatus = {
        val: title.toLowerCase(),
        help: message,
      };
      if (status === 1038) {
        thisObj.oldPwdIndex = newStatus;
        return;
      }
      thisObj.newPwdIndex = newStatus;
      return;
    });
};
const recoveryPassword = (thisObj, email) => {
  baseLogin
    .post(RECOVERY_PWD, qs.stringify({ email: email }))
    .then((res) => {
      //const { message } = r.response.data;
      console.log(res);
      // thisObj.getInfo();
      // return response;
    })
    .catch((err) => {
      console.log(err.response.data);
      const { status, message, title } = err.response.data;
      const newStatus = {
        status: title.toLowerCase(),
        help: message,
      };
      if (status === 200) {
        thisObj.mailIndex = {
          status: "success",
          help: "Gửi thông tin thành công, kiểm tra mail để nhận mật khẩu mới",
        };
        return;
      }
      thisObj.mailIndex = newStatus;
      return;
    });
};
export {
  getInfoUser,
  updateInfoUser,
  updatePassword,
  getFeedbacks,
  getFeedbackDetail,
  recoveryPassword,
};
