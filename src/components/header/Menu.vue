<template>
  <a-row type="flex" justify="space-between" class="nav-2-container">
    <router-link to="/">
      <img :src="importImg('logo.png')" class="logo" />
    </router-link>
    <a-row type="flex" class="menu">
      <router-link v-for="menu of menus" :key="menu.id" :to="menu.href">{{menu.name}}</router-link>
      <a href="https://nap.clappigames.com/" target="_blank" class="btn-pay">
        NẠP TIỀN
        <img :src="importImg('icon_pay.png')" />
      </a>
    </a-row>
    <a-icon type="menu" @click="showMenu" class="icon-menu" />
    <div :class="[isActiveMenu?'menu-mobile-active':'menu-mobile']">
      <a-icon type="close" class="close-menu" @click="showMenu" />
      <router-link v-for="menu of menus" :key="menu.id" :to="menu.href"><span @click="showMenu">{{menu.name}}</span></router-link>
      <a href="https://nap.clappigames.com/" target="_blank" class="btn-pay">
        NẠP TIỀN
        <img :src="importImg('icon_pay.png')" />
      </a>
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
      menus: [
        {
          id: 1,
          name: "TRANG CHỦ",
          href: "/",
        },
        {
          id: 2,
          name: "GAMES",
          href: "/games",
        },
        {
          id: 3,
          name: "TIN TỨC",
          href: "/news",
        },
      ],
    };
  },
  methods: {
    showMenu() {
      this.isActiveMenu = !this.isActiveMenu;
      console.log('fs')
    },
    importImg(img) {
      return importImgHeader[img];
    },
  },
};
</script>
<style src='./style/menu.scss' lang='scss'>
</style>