<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" class="section-left" style="padding:0">
      <ListGame :games="getGames" :span="span" />
      <ListGameByType :games="getGames" />
      <Banner :bn="bn" />
    </a-col>
  </a-row>
</template>
<script>
import ListGame from "../homepage/section2/section-left/ListGame";
import ListGameByType from "../homepage/section2/section-left/ListGameByType";
import Banner from "../homepage/Banner";
export default {
  //   methods: {
  //     importImg(url) {
  //       return importImg[url];
  //     },
  //   },
  data() {
    return {
      span: 6,
      bn: "banner.jpg",
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
      return [...this.$store.getters.games,this.newGame];
    },
  },
  components: {
    ListGame,
    ListGameByType,
    Banner,
  },
};
</script>

<style>
</style>