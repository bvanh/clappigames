const validateLogin = (thisObj, username, password) => {
  if (!username) {
    const newStatusUser = {
      val: "error",
      help: "Kiểm tra lại tên đăng nhập!",
    };
    thisObj.statusUser = newStatusUser;
    return false;
  }
  if (!password) {
    const newStatusPwd = {
      val: "error",
      help: "Kiểm tra lại mật khẩu!",
    };
    thisObj.statusPwd = newStatusPwd;
    return false;
  }
  return true;
};

export { validateLogin };
