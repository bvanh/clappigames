import cookieServie from "./cookieService";
function checkToken() {
  const currentTime = new Date().getTime();
  const oldAccessToken = cookieServie.getAccessToken();
  const tokenClappi = cookieServie.getToken();
  const checkExpriedToken = currentTime - tokenClappi?.timestamp > 75168000000;
  if (oldAccessToken === null || tokenClappi === false || checkExpriedToken) {
    return true;
  } else {
    return false;
  }
}
const redirectPage = (thisObj, page) => {
  if (checkToken()) {
    thisObj.$router.push(page);
    return false;
  }
  return true;
};
export { checkToken, redirectPage };
