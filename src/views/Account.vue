<template>
  <a-row class="account" :gutter="48">
    <a-col :span="24" :lg="{span:7}" class="controls">
      <a-row type="flex" align="top" style="margin-bottom:1rem">
        <a-col :span="8" class="avatar">
          <img :src="importImg('avatar.png')" width="100%" />
        </a-col>
        <a-col :span="16" class="username">
          <h3>{{userInfo.username}}</h3>
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
        :class="[isContenAccount===menu.name?'menu-active':'menu']"
      >
        <a-icon :type="menu.icon" />
        {{menu.name}}
      </div>
    </a-col>
    <a-col :span="24" :lg="{span:17}" style="padding-right:0" class="info">
      <component
        :is="printInfoAccount(isContenAccount)"
        :userInfo="userInfo"
        :getInfo="getInfoUser"
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
import { getInfoUser } from "../ultils/getData/user";
import { redirectPage } from "../ultils/checkToken";
import { importImgIcon } from "../ultils/importImg";
const { PROFILE, INFO, FEEDBACK, LOGOUT, PRIVACY } = controlsAccount;
export default {
  name: "Account",
  data() {
    return {
      isContenAccount: PROFILE,
      controls: [
        { id: 1, icon: "user", name: PROFILE },
        { id: 2, icon: "profile", name: INFO },
        { id: 3, icon: "gift", name: FEEDBACK },
        { id: 6, icon: "lock", name: PRIVACY },
        { id: 4, icon: "logout", name: LOGOUT },
      ],
      userInfo: {},
    };
  },
  methods: {
    getInfoUser() {
      getInfoUser(this);
    },
    importImg(url) {
      return importImgIcon[url];
    },
    switchContent(type) {
      this.isContenAccount = type;
    },
    printInfoAccount(type) {
      switch (type) {
        case PROFILE:
          return Profile;
        case INFO:
          return Info;
        case FEEDBACK:
          return Feedback;
        case PRIVACY:
          return Privacy;
        default:
          break;
      }
    },
  },
  components: {
    // Profile,
    // Info,
    // Feedback,
  },
  created() {
    if (redirectPage(this, "/login")) {
      getInfoUser(this);
    }
  },
};
</script>

<style src='../components/account/style.scss' lang='scss' scoped>
</style>