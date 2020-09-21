<template>
  <a-col class="user-controls">
    <a-icon type="user" />Chào mừng
    <a-dropdown :placement="'bottomRight'">
      <a class="ant-dropdown-link">
        {{ getUserIndex() }}
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item
          v-for="menu of menus"
          :key="menu.id"
          class="menu-item"
          @click="setMenuControls(menu.menu)"
          v-show="checkSocial(menu.id)"
        >
          <a-icon :type="menu.icon"></a-icon>
          <router-link :to="menu.link">
            <span>{{menu.name}}</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5" class="menu-item" @click="logout">
          <a-icon type="logout"></a-icon>
          <router-link to="/">
            <span>Đăng xuất</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <!-- <router-link to="/register" class="btn-log">Đăng ký</router-link> -->
  </a-col>
</template>

<script>
import { getInfoUser } from "../../ultils/getData/user";
import cookieService from "../../ultils/cookieService";
import { controlsAccount } from "../account/services";
const { PROFILE, INFO, PRIVACY, FEEDBACK } = controlsAccount;
export default {
  data() {
    return {
      userInfo: {},
      noSocial: null,
      menus: [
        {
          id: 1,
          icon: "user",
          link: "/account",
          name: "Tài khoản",
          menu: PROFILE,
        },
        {
          id: 2,
          icon: "profile",
          link: "/account",
          name: "Thông tin cá nhân",
          menu: INFO,
        },
        {
          id: 3,
          icon: "lock",
          link: "/account",
          name: "Bảo mật",
          menu: PRIVACY,
        },
        {
          id: 4,
          icon: "gift",
          link: "/account",
          name: "Phản hồi",
          menu: FEEDBACK,
        },
      ],
    };
  },
  methods: {
    checkSocial(menu) {
      if (menu === 3) {
        return this.noSocial;
      }
      return true;
    },
    logout() {
      this.$store.dispatch("logout");
      cookieService.resetToken();
    },
    getUserIndex() {
      const { username } = cookieService.getToken();
      return username;
    },
    setMenuControls(type) {
      this.$store.dispatch("setContentAccount", type);
    },
  },
  created() {
    getInfoUser(this);
    const { noSocial } = cookieService.getToken();
    this.noSocial = noSocial;
  },
};
</script>

<style src='./style/header.scss' lang='scss' scoped></style>
