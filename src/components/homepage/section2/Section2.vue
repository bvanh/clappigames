<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" class="section-left" :lg="{span:16}">
      <ListGame :games="getGames" :span="span" />
      <ListGameByType :games="getGames" />
      <Banner :bn="getBanners[0]" />
      <News :spanNews="spanNews" :colNews="colNews" :pageCount="pageCount" :isPage="isPage"/>
    </a-col>
    <a-col :span="8" class="section-right">
      <Category :games="getGames" />
      <Banner :bn="getBanners[1]" />
      <Fb />
    </a-col>
  </a-row>
</template>
<script>
import ListGame from "./section-left/ListGame";
import ListGameByType from "./section-left/ListGameByType";
import News from "./section-left/News";
import Category from "./section-right/Category";
import Banner from "../Banner";
import Fb from "../Fb";
export default {
  name: "Fame2",
  data() {
    return {
      span: 8,
      spanNews: 12,
      colNews: [12, 12],
      pageCount: 4,
      isPage:"home-news",
      bn2: "banner2.jpg",
      bn1: "banner.jpg",
    };
  },
  computed: {
    getGames() {
      // console.log(this.$store.getters.games);
      return this.$store.getters.games;
    },
    getBanners() {
      return this.$store.getters.banners;
    },
  },
  components: {
    ListGame,
    ListGameByType,
    Banner,
    News,
    Category,
    Fb,
  },
};
</script>

<style src="./section-left/style.scss" lang="scss" scoped></style>
