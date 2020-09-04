<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" class="section-left" style="padding:0">
      <ListGame :games="getGames" :span="span" />
      <ListGameByType :games="getGames" />
      <Banner />
    </a-col>
  </a-row>
</template>
<script>
import ListGame from "../homepage/section2/section-left/ListGame";
import ListGameByType from "../homepage/section2/section-left/ListGameByType";
import Banner from "../homepage/section2/section-left/Banner";
export default {
  //   methods: {
  //     importImg(url) {
  //       return importImg[url];
  //     },
  //   },
  data() {
    return { span: 6 };
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
  },
};
</script>

<style>
</style>