<template>
  <div class="game-container">
    <div class="title">
      <a class="title-game">
        <img :src="importIcon('icon_game_blue.png')" />
        GAME MOBILE
      </a>
      <a class="title-see-all">
        Xem tất cả
        <a-icon type="forward" />
      </a>
    </div>
    <a-row :gutter="32">
      <a-col :span="8" v-for="game of games" :key="game.id" class="game-info">
        <img :src="importImgGame(game.img)" width="100%" class="game-thumbnail" />
        <h3>{{game.name}}</h3>
        <div>
          {{game.type}}
          <span>
            <a-icon type="eye" style="margin-right:5px" />
            {{game.view}}
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
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>