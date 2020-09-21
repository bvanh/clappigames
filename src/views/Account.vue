<template>
  <a-row class="account" :gutter="48">
    <a-col :span="24" :lg="{span:7}" class="controls">
      <a-row type="flex" align="top" style="margin-bottom:1rem">
        <a-col :span="8" class="avatar">
          <img :src="avatar" width="100%" />
        </a-col>
        <a-col :span="16" class="username">
          <h3>{{username}}</h3>
          <h4>UserID: {{userInfo.fakeId}}</h4>
          <h4>
            Coin:
            <span style="color:#ff560e">{{userInfo.coin}}</span>
          </h4>
        </a-col>
      </a-row>
      <div
        v-for="menu of controls"
        :key="menu.id"
        @click="switchContent(menu.name)"
        :class="[menuActive(menu.name)?'menu-active':'menu']"
        v-show="checkSocial(menu.id)"
      >
        <a-icon :type="menu.icon" />
        {{menu.id===3?`${menu.name} (${feedbacks.totalElements})`:menu.name}}
      </div>
      <div class="menu" @click="logout">
        <a-icon type="logout" />Đăng xuất
      </div>
    </a-col>
    <a-col :span="24" :lg="{span:17}" style="padding-right:0" class="info">
      <component
        :is="printInfoAccount"
        :userInfo="userInfo"
        :getInfo="getInfoUser"
        :username="username"
        :feedbacks="feedbacks"
        :setPageNumFeedback="setPageNumFeedback"
        :refreshFeedbacks="refreshFeedbacks"
      ></component>
    </a-col>
  </a-row>
</template>
<script>
import { controlsAccount } from "../components/account/services";
import Profile from "../components/account/Profile";
import Info from "../components/account/Info";
import Privacy from "../components/account/Privacy";
import Feedback from "../components/account/feedback/Feedback";
import { getInfoUser, getFeedbacks } from "../ultils/getData/user";
import { redirectPage } from "../ultils/checkToken";
import { importImgIcon } from "../ultils/importImg";
import cookieService from "../ultils/cookieService";
const { PROFILE, INFO, FEEDBACK, PRIVACY } = controlsAccount;
export default {
  name: "Account",
  data() {
    return {
      isContenAccount: this.$store.getters.contentAccount,
      controls: [
        { id: 1, icon: "user", name: PROFILE },
        { id: 2, icon: "profile", name: INFO },
        { id: 3, icon: "gift", name: FEEDBACK },
        { id: 6, icon: "lock", name: PRIVACY },
      ],
      username: "",
      avatar: "",
      noSocial: null,
      userInfo: {},
      feedbacks: {},
      paramsFeedbacks: {
        count: 5,
        page: 0,
        isRefresh: false,
      },
    };
  },
  methods: {
    checkSocial(menu) {
      if (menu === 6) {
        return this.noSocial;
      }
      return true;
    },
    setPageNumFeedback(e) {
      this.paramsFeedbacks = { ...this.paramsFeedbacks, page: e };
    },
    refreshFeedbacks() {
      const { isRefresh } = this.paramsFeedbacks;
      this.paramsFeedbacks = { ...this.paramsFeedbacks, isRefresh: !isRefresh };
    },
    getInfoUser() {
      getInfoUser(this);
    },
    importImg(url) {
      return importImgIcon[url];
    },
    switchContent(type) {
      this.$store.dispatch("setContentAccount", type);
    },
    menuActive(name) {
      return this.$store.getters.contentAccount === name;
    },
    logout() {
      this.$store.dispatch("logout");
      cookieService.resetToken();
      this.$router.push("/");
    },
  },
  computed: {
    printInfoAccount() {
      switch (this.$store.getters.contentAccount) {
        case PROFILE:
          return Profile;
        case INFO:
          return Info;
        case FEEDBACK:
          return Feedback;
        case PRIVACY:
          return Privacy;
        default:
          return "  ";
      }
    },
  },
  watch: {
    paramsFeedbacks: {
      deep: true,
      handler() {
        getFeedbacks(this, this.paramsFeedbacks);
      },
    },
  },
  created() {
    if (redirectPage(this, "/login")) {
      getInfoUser(this);
      getFeedbacks(this, this.paramsFeedbacks);
      const { username, avatar, noSocial } = cookieService.getToken();
      (this.username = username), (this.avatar = avatar);
      this.noSocial = noSocial;
    }
  },
};
</script>

<style src='../components/account/style.scss' lang='scss' scoped>
</style>