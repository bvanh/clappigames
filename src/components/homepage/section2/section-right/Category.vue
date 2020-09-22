<template>
  <div class="game-container">
    <div class="title">
      <a
        :class="[isGamesHot?'title-game title-game-active':'title-game']"
        @click="switchTypeGames"
      >GAME HOT</a>
      <img :src="importIcon('icon_dots.png')" />
      <a
        class="title-game"
        :class="[isGamesHot?'title-game':'title-game title-game-active']"
        @click="switchTypeGames"
      >GAME NEW</a>
    </div>
    <a-row :gutter="24" type="flex">
      <a-col :span="8" v-for="game of gamesHot()" :key="game.id" class="game-info">
        <router-link :to="`/games/${game.shortName}`">
          <img :src="game.avatar" class="game-avatar" />
        </router-link>
        <h3 class="game-fullname">{{game.fullName}}</h3>
        <div>{{game.category}}</div>
      </a-col>
    </a-row>
    <router-link to="/games" style="color:black">
      <button class="btn-read-more">Xem thêm</button>
    </router-link>
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
    return {
      isGamesHot: true,
    };
  },
  methods: {
    switchTypeGames() {
      this.isGamesHot = !this.isGamesHot;
    },
    gamesHot() {
      switch (this.isGamesHot) {
        case true:
          return this.$store.getters.gamesHot;
        default:
          return this.$store.getters.gamesNew;
      }
    },
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