<template>
  <div class="game-container">
    <div class="title">
      <a class="title-game">
        <img :src="importIcon('icon_game_blue.png')" />
        GAME MOBILE
      </a>
      <router-link to="/games" class="title-see-all">
        Xem thêm
        <a-icon type="forward" />
      </router-link>
    </div>
    <a-row :gutter="32" type="flex">
      <a-col
        :sm="{ span: span }"
        :xs="{ span: 12 }"
        v-for="(game, index) of games"
        :key="game.id"
        class="game-info"
        v-show="index !== 2"
      >
        <router-link :to="`/games/${game.shortName}`" class="game-thumbnail">
          <img :src="game.gameImg" width="100%" />
        </router-link>
        <h3>
          <router-link :to="`/games/${game.shortName}`">{{
            game.fullName
          }}</router-link>
        </h3>
        <div>
          {{ game.category }}
          <span>
            <img :src="importIcon('icon_people.png')" />
            {{ game.content.length }}
          </span>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { importImgIcon, importImgGames } from "../../../../ultils/importImg";
export default {
  name: "ListGame",
  props: {
    games: Array,
    span: Number,
  },
  data() {
    return {};
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
    importImgGame(url) {
      return importImgGames[url];
    },
  },
  created() {
    // console.log(this.games);
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>