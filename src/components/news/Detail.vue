<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" :lg="{span:16}" class="section-left">
      <div class="news-container page-news">
        <div class="title">
          <div>
            <a
              :class="`title-game ${menu.id===isActiveMenu?'menu-active2':''} title-${menu.subClass}`"
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
          <h3 class="title-news">{{printSubject(news)}}</h3>
        </div>
        <div class="content">
          <h3>{{printSubject(news)}}</h3>
          <p>
            <a-icon type="clock-circle" />
            {{formatDate(news.createAt)}}
          </p>
          <vue-markdown>{{news.content}}</vue-markdown>
        </div>
      </div>
    </a-col>
    <a-col :span="8" class="section-right" style="padding:0">
      <Category :games="getGames" />
      <Banner :bn="getBanners[1]" />
      <Fb />
    </a-col>
  </a-row>
</template>
<script>
import Category from "../homepage/section2/section-right/Category";
import Banner from "../homepage/Banner";
import Fb from "../homepage/Fb";
import VueMarkdown from "vue-markdown";
import { formatDate } from "../../ultils/format";
import { importImgIcon } from "../../ultils/importImg";
import { getNewsDetail } from "../../ultils/getData/news";
import { api } from "../../api/apiUrl";
const { NEWS_DETAIL } = api;
export default {
  data() {
    return {
      isActiveMenu: 1,
      bn: "banner2.jpg",
      news: {
        content: "",
        createAt: "",
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
      ],
    };
  },
  computed: {
    getBanners() {
      return this.$store.getters.banners;
    },
    getGames() {
      return this.$store.getters.games;
    },
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
    setActiveMenu(id) {
      this.isActiveMenu = id;
      this.$router.push('/news')
    },
    printSubject(content) {
      if (content) {
        return content.subject;
      }
      return "";
    },
    formatDate: formatDate,
  },
  created() {
    const newsId = this.$route.params.id;
    getNewsDetail(this, NEWS_DETAIL + newsId);
  },
  components: {
    Category,
    Banner,
    Fb,
    VueMarkdown,
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>