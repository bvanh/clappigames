const validateLogin = (thisObj, username, password) => {
  const newStatus = (type) => {
    return {
      val: "error",
      help: `Kiểm tra lại ${type}!`,
    };
  };
  if (!username) {
    thisObj.statusUser = newStatus("tên đăng nhập!");
    return false;
  }
  if (!password) {
    thisObj.statusPwd = newStatus("mật khẩu!");
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
    thisObj.statusUser = newStatus("tên đăng nhập!");
    return false;
  }
  if (!password) {
    thisObj.statusPwd = newStatus("mật khẩu!");
    return false;
  }
  if (!phone) {
    thisObj.statusPhone = newStatus("số điện thoại!");
    return false;
  }
  if (!mail) {
    thisObj.statusMail = newStatus("email");
    return false;
  }
  return true;
};

export { validateLogin };
