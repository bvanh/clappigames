<template>
  <div :class="`news-container ${isPage}`">
    <div class="title">
      <div>
        <a
          :class="`title-game ${
            menu.id === isActiveMenu ? 'menu-active' : ''
          } title-${menu.subClass}`"
          v-for="menu of menus"
          :key="menu.id"
          @click="setActiveMenu(menu.id, menu.subClass)"
        >
          <div
            :class="`${menu.id === isActiveMenu ? 'rectangle' : ''} ${
              menu.subClass
            }`"
          ></div>
          <img :src="importIcon(menu.icon1)" />
          {{ menu.name }}
          <img :src="importIcon(menu.icon2)" class="dots" />
        </a>
      </div>
      <router-link
        to="/news"
        class="title-see-all"
        v-show="isPage !== 'page-news'"
      >
        Xem thêm
        <a-icon type="forward" />
      </router-link>
    </div>
    <a-row type="flex" :gutter="24" class="li-news">
      <a-col
        :sm="{ span: spanNews }"
        :xs="{ span: 24 }"
        v-for="news of listNews"
        :key="news.id"
        class="news"
      >
        <a-row :gutter="12">
          <a-col
            :span="colNews[0]"
            class="thumbnail"
            :style="getThumbnail(news.image)"
          ></a-col>
          <a-col :span="colNews[1]" class="news-info">
            <h4>
              <router-link :to="`/news/detail/${news.newsId}`">{{
                news.subject
              }}</router-link>
            </h4>
            <div class="news-footer">
              <a-icon type="clock-circle" />
              <span>{{ formatDate(news.createAt) }}</span>
            </div>
          </a-col>
        </a-row>
      </a-col>
      <div :class="`pagination ${isPage}-pagination`">
        <a-pagination size="small" :total="totalNews" @change="getPageNumber" />
      </div>
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
const regexSpace = /\s/gi;
export default {
  name: "ListGame",
  props: {
    games: Array,
    spanNews: Number,
    colNews: Array,
    isPage: String,
    pageCount: Number,
  },
  data() {
    return {
      isActiveMenu: 1,
      listNews: [],
      totalNews: null,
      params: {
        type: null,
        count: this.pageCount,
        page: 0,
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
      this.params.type = `/${type}`;
    },
    getPageNumber(val) {
      this.params = { ...this.params, page: val - 1 };
    },
    getThumbnail: (img) => {
      // console.log(img.replace(regexSpace, "%20"));
      return `background-image: url(${img.replace(regexSpace, "%20")})`;
    },
    formatDate: formatDate,
  },
  watch: {
    params: {
      deep: true,
      handler() {
        const { type, count, page } = this.params;
        const newParams = { count: count, page: page };
        getNews(this, NEWS_ALL + type, newParams);
      },
    },
  },
  created() {
    this.params.type = "/all";
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>