<template>
  <a-col :span="24" :lg="{span:8}" class="form-container form-login login-active">
    <!-- <h3 :class="`${log.id}-title`">df</h3> -->
    <a-row class="user-info">
      <a-col :span="8" class="avatar">
        <img src="../../../../assets/icon/avatar.png" width="100%" />
      </a-col>
      <a-col :span="16" class="info">
        <h3>{{userInfo.username}}</h3>
        <span class="user-id">UserID: {{userInfo.fakeId}}</span>
        <p class="user-id">Coin: {{userInfo.coin}}</p>
      </a-col>
    </a-row>
    <a-col class="menus">
      <div v-for="menu of controls" :key="menu.id">
        <a-icon :type="menu.icon"></a-icon>
        <router-link :to="menu.link"><span>{{menu.name}}</span></router-link>
      </div>
      <div>
        <a-icon type="logout"></a-icon>
        <span>Đăng xuất</span>
      </div>
    </a-col>
  </a-col>
</template>
<script>
import { importImgForm } from "../../../../ultils/importImg";
import { getInfoUser } from "../../../../ultils/getData/user";
import cookieService from "../../../../ultils/cookieService";
export default {
  name: "Form",
  props: {
    log: Object,
  },
  data() {
    return {
      controls: [
        { id: 1, icon: "user", link: "/account", name: "Tài khoản" },
        {
          id: 2,
          icon: "profile",
          link: "/password",
          name: "Đổi mật khẩu",
        },
      ],
      userInfo: {},
    };
  },
  methods: {
    importImg(url) {
      return importImgForm[url];
    },
    logout() {
      this.$store.dispatch("switchLogin");
      cookieService.resetToken();
    },
  },
  created() {
    getInfoUser(this);
  },
};
</script>
<style src='../style/form.scss' lang='scss'>
</style>