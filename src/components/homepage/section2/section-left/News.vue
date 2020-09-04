<template>
  <div class="news-container">
    <div class="title">
      <div>
        <a
          :class="`title-game ${menu.id===isActiveMenu?'menu-active':''} title-${menu.subClass}`"
          v-for="menu of menus"
          :key="menu.id"
          @click="setActiveMenu(menu.id)"
        >
          <div :class="`${menu.id===isActiveMenu?'rectangle':''} ${menu.subClass}`"></div>
          <img :src="importIcon(menu.icon1)" />
          {{menu.name}}
          <img :src="importIcon(menu.icon2)" class="dots" />
        </a>
      </div>
      <a class="title-see-all">
        Xem thêm
        <a-icon type="forward" />
      </a>
    </div>
    <a-row type="flex" :gutter="24" class="li-news">
      <a-col :sm="{span:12}" :xs="{span:24}" v-for="news of listNews" :key="news.id" class="news">
        <a-row :gutter="12">
          <a-col :span="12" class="thumbnail" :style="{backgroundImage:getBackgroundUrl(news.img)}"></a-col>
          <a-col :span="12" class="news-info">
            <h4>{{news.title}}</h4>
            <div class="news-footer">
              <a-icon type="clock-circle" />
              <span>{{news.created_at}}</span>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <!-- <img :src="importImgGame(game.img)" width="100%" class="game-thumbnail" />
        <h3>{{game.name}}</h3>
        <div>
          {{game.type}}
          <span>
            <a-icon type="eye" style="margin-right:5px" />
            {{game.view}}
          </span>
      </div>-->
    </a-row>
  </div>
</template>
<script>
import {
  importImgIcon,
  importImgGames,
  importImg,
} from "../../../../ultils/importImg";
import { news } from "../../../../ultils/valDefault";
export default {
  name: "ListGame",
  props: {
    games: Array,
  },
  data() {
    return {
      isActiveMenu: 1,
      listNews: news,
      menus: [
        {
          id: 1,
          name: "TẤT CẢ",
          subClass: "all",
          icon1: "icon_news_black.png",
          icon2: "icon_dots.png",
        },
        {
          id: 2,
          name: "TIN TỨC",
          subClass: "news",
          icon1: "",
          icon2: "icon_dots.png",
        },
        {
          id: 3,
          name: "SỰ KIỆN",
          subClass: "event",
          icon1: "",
          icon2: "",
        },
      ],
    };
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
    importImgGame(url) {
      return importImgGames[url];
    },
    importImg(url) {
      return importImg[url];
    },
    getBackgroundUrl(pic) {
      return `url(${require("../../../../assets/" + pic)})`;
    },
    setActiveMenu(id) {
      this.isActiveMenu = id;
    },
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>