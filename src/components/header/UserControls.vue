<template>
  <a-col class="user-controls">
    <a-icon type="user" />Chào mừng
    <a-dropdown :placement="'bottomRight'">
      <a class="ant-dropdown-link">
        {{ userInfo.username }}
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item v-for="menu of menus" :key="menu.id" class="menu-item">
          <a-icon :type="menu.icon"></a-icon>
          <router-link :to="menu.link">
            <span>{{menu.name}}</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2" class="menu-item">
          <a-icon type="logout"></a-icon>
          <span @click="logout">Đăng xuất</span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <!-- <router-link to="/register" class="btn-log">Đăng ký</router-link> -->
  </a-col>
</template>

<script>
import { getInfoUser } from "../../ultils/getData/user";
import cookieService from "../../ultils/cookieService";
export default {
  data() {
    return {
      userInfo: {},
      menus: [
        { id: 1, icon: "user", link: "/account", name: "Tài khoản" },
        {
          id: 2,
          icon: "profile",
          link: "/account",
          name: "Thông tin cá nhân",
        },
        {
          id: 3,
          icon: "lock",
          link: "/account",
          name: "Bảo mật",
        },
        {
          id: 4,
          icon: "gift",
          link: "/account",
          name: "Phản hồi",
        },
      ],
    };
  },
  methods:{
      logout() {
      this.$store.dispatch("logout");
      cookieService.resetToken();
    },
  },
  created() {
    getInfoUser(this);
  },
};
</script>

<style src='./style/header.scss' lang='scss' scoped></style>
