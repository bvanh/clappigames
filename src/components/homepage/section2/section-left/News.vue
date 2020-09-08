<template>
  <div :class="`news-container ${isPage}`">
    <div class="title">
      <div>
        <a
          :class="`title-game ${menu.id===isActiveMenu?'menu-active':''} title-${menu.subClass}`"
          v-for="menu of menus"
          :key="menu.id"
          @click="setActiveMenu(menu.id,menu.subClass)"
        >
          <div :class="`${menu.id===isActiveMenu?'rectangle':''} ${menu.subClass}`"></div>
          <img :src="importIcon(menu.icon1)" />
          {{menu.name}}
          <img :src="importIcon(menu.icon2)" class="dots" />
        </a>
      </div>
      <router-link to="/news" class="title-see-all">
        Xem thêm
        <a-icon type="forward" />
      </router-link>
    </div>
    <a-row type="flex" :gutter="24" class="li-news">
      <a-col
        :sm="{span:spanNews}"
        :xs="{span:24}"
        v-for="news of listNews"
        :key="news.id"
        class="news"
      >
        <a-row :gutter="12">
          <a-col :span="12" class="thumbnail" :style="{backgroundImage:`url(${news.image})`}"></a-col>
          <a-col :span="12" class="news-info">
            <h4>
              <router-link :to="`/news/detail/${news.newsId}`">{{news.subject}}</router-link>
            </h4>
            <div class="news-footer">
              <a-icon type="clock-circle" />
              <span>{{formatDate(news.createAt)}}</span>
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
import { formatDate } from "../../../../ultils/format";
import { getNews } from "../../../../ultils/getData/news";
import { api } from "../../../../api/apiUrl";
const { NEWS_ALL } = api;
export default {
  name: "ListGame",
  props: {
    games: Array,
    spanNews: Number,
    isPage: String,
  },
  data() {
    return {
      isActiveMenu: 1,
      listNews: [],
      type: null,
      params: {
        pageSize: 10,
        count: 4,
      },
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
    setActiveMenu(id, type) {
      this.isActiveMenu = id;
      this.type = `/${type}`;
    },
    formatDate: formatDate,
  },
  watch: {
    type: {
      deep: true,
      handler() {
        getNews(this, NEWS_ALL + this.type, this.params);
      },
    },
  },
  created() {
    this.type = "/all";
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>