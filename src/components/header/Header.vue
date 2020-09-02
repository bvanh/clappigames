<template>
  <div class="header">
    <a-row class="nav-1">
      <a-row class="nav-1-container" type="flex" justify="space-between" align="middle">
        <a-col class="hotline">
          <a-icon type="phone" class="icon-phone" />
          <p>Hotline: 1900 1542</p>
        </a-col>
        <a-col>
          <a-icon type="import" class="icon-logout" />
          <a class="btn-log">Đăng nhập</a>|
          <a class="btn-log">Đăng ký</a>
        </a-col>
      </a-row>
    </a-row>
    <a-row class="nav-2">
      <Menu />
    </a-row>
  </div>
</template>
<script>
import { importImgHeader } from "../../ultils/importImg";
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
  },
  components: {
    Menu,
  },
};
</script>
<style src='./style/header.scss' lang='scss'>
</style>