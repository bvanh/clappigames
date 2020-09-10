function validatePhone(phone) {
  let re = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  let testPhone = re.test(phone);
  return testPhone;
}
function validateEmail(email) {
  let regex = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
  let testEmail = regex.test(email);
  return testEmail;
}
function validatePassword(pwd) {
  let regex = /^(?=.*[a-z0-9])\S{6,20}$/gm;
  let testEmail = regex.test(pwd);
  return testEmail;
}
const validateLogin = (thisObj, username, password) => {
  const newStatus = (type) => {
    return {
      val: "error",
      help: `Kiểm tra lại ${type}!`,
    };
  };
  if (!username) {
    thisObj.statusUser = newStatus("tên đăng nhập");
    return false;
  }
  if (!password) {
    thisObj.statusPwd = newStatus("mật khẩu (6-20 ký tự)");
    return false;
  }
  return true;
};
const validateRegister = (thisObj, username, password, phone, mail) => {
  const newStatus = (type) => {
    return {
      val: "error",
      help: `Kiểm tra lại ${type}!`,
    };
  };
  if (!username) {
    thisObj.statusUser = newStatus("tên đăng nhập");
    return false;
  }
  if (!password || !validatePassword(password)) {
    thisObj.statusPwd = newStatus("mật khẩu (6-20 ký tự)");
    return false;
  }
  if (!validatePhone(phone)) {
    thisObj.statusPhone = newStatus("số điện thoại!");
    return false;
  }
  if (!validateEmail(mail)) {
    thisObj.statusMail = newStatus("email");
    return false;
  }
  return true;
};

export { validateLogin, validateRegister };
