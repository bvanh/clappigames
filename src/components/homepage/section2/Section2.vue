<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" class="section-left" :lg="{span:16}">
      <ListGame :games="getGames" :span="span" />
      <ListGameByType :games="getGames" />
      <Banner :bn="bn1"/>
      <News />
    </a-col>
    <a-col :span="8" class="section-right">
      <Category :games="getGames" />
      <Banner :bn="bn2"/>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/3QZVN/"
        data-width="700"
        data-height="300"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </a-col>
  </a-row>
</template>
<script>
import ListGame from "./section-left/ListGame";
import ListGameByType from "./section-left/ListGameByType";
import News from "./section-left/News";
import Category from "./section-right/Category";
import Banner from "./section-left/Banner";
export default {
  name: "Fame2",
  data() {
    return {
      span: 8,
      bn2: "banner2.jpg",
      bn1: "banner.jpg",
    };
  },
  computed: {
    getGames() {
      return this.$store.getters.games;
    },
  },
  components: {
    ListGame,
    ListGameByType,
    Banner,
    News,
    Category,
  },
};
</script>

<style src="./section-left/style.scss" lang="scss" scoped></style>
