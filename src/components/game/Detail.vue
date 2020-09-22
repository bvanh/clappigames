<template>
  <div class="game-detail">
    <img :src="getGameDetail.backgroundImg" width="100%" class="game-banner" />
    <div class="menu">
      <div>
        <span>
          <img :src="getGameDetail.avatar" />
          <h3>{{getGameDetail.fullName}}</h3>
        </span>
        <a :href="getGameDetail.landingPage" target="_blank" id="homepage">Trang chủ</a>
        <img :src="importIcon('icon_dots.png')" />
        <a :href="getGameDetail.fanpage" target="_blank" id="fanpage">Fanpage</a>
        <a :href="getGameDetail.googleStoreDownload" target="_blank" class="btn-download">
          <img :src="importImg('android.png')" class="img-download" />
        </a>
        <a :href="getGameDetail.appStoreDownload" target="_blank" class="btn-download">
          <img :src="importImg('ios.png')" class="img-download" />
        </a>
      </div>
    </div>
    <a-row class="frame-1" :gutter="40">
      <a-col :span="24" :lg="{span:16}" class="video" style="padding-left:0">
        <youtube-media :video-id="videoId"></youtube-media>
      </a-col>
      <Form :log="{id:'',title:''}" />
    </a-row>
    <a-row class="section2" :gutter="40">
      <a-col :span="24" :lg="{span:16}" class="section-left">
        <div class="title">
          <a class="title-game">
            <img :src="importIcon('icon_game_blue.png')" />
            GIỚI THIỆU
          </a>
          <router-link to="/news" class="title-see-all">
            Xem thêm
            <a-icon type="forward" />
          </router-link>
        </div>
        <div class="content-intro-game">
          <vue-markdown>{{ getGameDetail.content }}</vue-markdown>
        </div>
      </a-col>
      <a-col :span="8" class="section-right">
        <Category :games="getGames" />
        <Banner :bn="getBanners[1]" />
        <Fb />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Form from "../homepage/section1/Form";
import Category from "../homepage/section2/section-right/Category";
import Banner from "../homepage/Banner";
import Fb from "../homepage/Fb";
import { getIdFromURL } from "vue-youtube-embed";
import { importImgGames, importImgIcon } from "../../ultils/importImg";
import VueMarkdown from "vue-markdown";
export default {
  data() {
    return {
      videoId: getIdFromURL(
        this.$store.getters.gameDetail(this.$route.params.id)[0].videoUrl
      ),
    };
  },
  methods: {
    importImg(url) {
      return importImgGames[url];
    },
    importIcon(url) {
      return importImgIcon[url];
    },
  },
  computed: {
    getGames() {
      return this.$store.getters.games;
    },
    getGameDetail() {
      const gameDetail = this.$store.getters.gameDetail(this.$route.params.id);
      // console.log(gameDetail);
      return gameDetail[0];
    },
    getBanners() {
      return this.$store.getters.banners;
    },
  },
  created() {},
  components: {
    Form,
    Category,
    Banner,
    Fb,
    VueMarkdown,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>