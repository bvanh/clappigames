<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24" class="section-left" style="padding:0">
      <ListGame :games="getGames" :span="span" />
      <ListGameByType :games="getGames" />
      <Banner :bn="getBanners[0]" />
    </a-col>
  </a-row>
</template>
<script>
import ListGame from "../homepage/section2/section-left/ListGame";
import ListGameByType from "../homepage/section2/section-left/ListGameByType";
import Banner from "../homepage/Banner";
export default {
  data() {
    return {
      span: 6,
      bn: "banner.jpg",
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
    ListGame,
    ListGameByType,
    Banner,
  },
};
</script>

<style>
</style>