<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="16" class="list-game">
      <ListGame :games="games" />
      <ListGameByType :games="games" />
      <div class="banner">
        <img :src="importImg('banner.jpg')" width="100%" />
      </div>
      <News />
    </a-col>
    <a-col :span="8" class="category" style="padding:0">
      <Category :games="games" />
      <div class="banner">
        <img :src="importImg('banner2.jpg')" width="100%" />
      </div>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/3QZVN/"
        data-width="700"
        data-height='300'
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
import { games } from "../../../ultils/valDefault";
import { importImg } from "../../../ultils/importImg";
export default {
  name: "Fame2",
  data() {
    return {
      games: games,
    };
  },
  methods: {
    importImg(url) {
      return importImg[url];
    },
  },
  components: {
    ListGame,
    ListGameByType,
    News,
    Category,
  },
};
</script>

<style src="./section-left/style.scss" lang="scss" scoped></style>
