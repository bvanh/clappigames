<template>
  <a-row type="flex" justify="space-between" class="nav-2-container">
    <img :src="importImg('logo.png')" class="logo"/>
    <a-row type="flex" class="menu">
      <router-link to="/">TRANC CHỦ</router-link>
      <router-link to="/games">GAMES</router-link>
      <router-link to="/news">TIN TỨC</router-link>
      <router-link to="/pay" class="btn-pay">
        NẠP TIỀN
        <img :src="importImg('icon_pay.png')" />
      </router-link>
    </a-row>
    <a-icon type="menu" @click="showMenu" class="icon-menu" />
    <div :class="[isActiveMenu?'menu-mobile-active':'menu-mobile']">
      <a-icon type="close" class="close-menu" @click="showMenu" />
      <router-link to="/">TRANG CHỦ</router-link>
      <router-link to="/games">GAMES</router-link>
      <router-link to="/news">TIN TỨC</router-link>
      <router-link to="/pay" class="btn-pay">
        NẠP TIỀN
        <img :src="importImg('icon_pay.png')" />
      </router-link>
    </div>
    <div :class="[isActiveMenu?'menu-mask':'']" style="display:none" @click="showMenu"></div>
  </a-row>
</template>

<script>
import { importImgHeader } from "../../ultils/importImg";
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
};
</script>
<style src='./style/menu.scss' lang='scss'>
</style>