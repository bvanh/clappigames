import { controlsAccount } from "../components/account/services";
const { PROFILE } = controlsAccount;
export const state = {
  listGames: [],
  banners: [],
  isLogin: false,
  isContentAccount: PROFILE,
};
