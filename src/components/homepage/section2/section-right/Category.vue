<template>
  <div class="game-container">
    <div class="title">
      <a class="title-game">GAME HOT</a>
      <img :src="importIcon('icon_dots.png')" />
      <a class="title-game">GAME NEW</a>
    </div>
    <a-row :gutter="24" type='flex'>
      <a-col :span="8" v-for="game of games" :key="game.id" class="game-info">
        <img :src="importImgGame(game.icon)" class="game-avatar" />
        <h3>{{game.name}}</h3>
        <div>{{game.category}}</div>
      </a-col>
    </a-row>
    <button class="btn-read-more">Xem thêm</button>
  </div>
</template>
<script>
import { importImgGames, importImgIcon } from "../../../../ultils/importImg";
export default {
  name: "Category",
  props: {
    games: Array,
  },
  data() {
    return {};
  },
  methods: {
    importImgGame(url) {
      return importImgGames[url];
    },
    importIcon(url) {
      return importImgIcon[url];
    },
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>