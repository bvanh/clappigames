<template>
  <div class="header">
    <a-row class="nav-1">
      <a-row class="nav-1-container" type="flex" justify="space-between" align="middle">
        <a-col class="hotline">
          <a-icon type="phone" class="icon-phone" />
          <p>Hotline: 1900 1542</p>
        </a-col>
        <component :is="switchLogin()"></component>
      </a-row>
    </a-row>
    <a-row class="nav-2">
      <Menu />
    </a-row>
  </div>
</template>
<script>
import { importImgHeader } from "../../ultils/importImg";
import BtnLogin from './BtnLogin'
import UserControls from './UserControls'
import Menu from "./Menu";
export default {
  name: "Header",
  data() {
    return {
      isActiveMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.isActiveMenu = !this.isActiveMenu;
    },
    importImg(img) {
      return importImgHeader[img];
    },
    switchLogin() {
      switch (this.$store.getters.isLogin) {
        case true:
          return UserControls;
        default:
          return BtnLogin;
      }
    },
  },
  components: {
    Menu,
  },
};
</script>
<style src='./style/header.scss' lang='scss'>
</style>