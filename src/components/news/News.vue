<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="16" class="section-left">
      <News :spanNews="spanNews" :isPage="'page-news'" />
    </a-col>
    <a-col :span="8" class="section-right" style="padding:0">
      <Category :games="getGames" />
      <Banner :bn="bn" />
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
      bn: "banner2.jpg",
      newGame: {
        id: 4,
        name: "Comming soon",
        type: "Game mobile",
        category: "GIẢI TRÍ",
        view: 1010,
        img: "img2.jpg",
        icon: "icon_game.png",
      },
    };
  },
  computed: {
    getGames() {
      return [...this.$store.getters.games, this.newGame];
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

<style>
</style>