<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" :lg="{span:16}" class="section-left">
      <News :spanNews="spanNews" :colNews="colNews" :pageCount="pageCount" :isPage="'page-news'" />
    </a-col>
    <a-col :span="8" class="section-right" style="padding:0">
      <Category :games="getGames" />
      <Banner :bn="getBanners[1]" />
      <Fb />
    </a-col>
  </a-row>
</template>
<script>
import News from "../homepage/section2/section-left/News";
import Category from "../homepage/section2/section-right/Category";
import Banner from "../homepage/Banner";
import Fb from "../homepage/Fb";
export default {
  //   methods: {
  //     importImg(url) {
  //       return importImg[url];
  //     },
  //   },
  data() {
    return {
      span: 6,
      spanNews: 24,
      colNews: [8, 16],
      pageCount: 8,
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
  components: {
    News,
    Category,
    Banner,
    Fb,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>