<template>
  <div class="game-by-type">
    <div class="title">
      <a class="title-game">
        <img :src="importIcon('icon_game_black.png')" />
        NHẬP VAI
      </a>
      <img :src="importIcon('icon_dots.png')" />
      <a class="title-game">
        <img :src="importIcon('icon_game_black.png')" />
        CHIẾN THUẬT
      </a>
      <img :src="importIcon('icon_dots.png')" />
      <a class="title-game">
        <img :src="importIcon('icon_game_black.png')" />
        GIẢI TRÍ
      </a>
    </div>
    <a-row class="list-games" type="flex">
      <a-col :span="8">
        <h3
          v-for="game of games"
          :key="game.id"
          v-show="printGameName(game,ROLE_PLAYING)"
        >{{printGameName(game,ROLE_PLAYING)}}</h3>
      </a-col>
      <a-col :span="8">
        <h3
          v-for="game of games"
          :key="game.id"
          v-show="printGameName(game,STRATEGY)"
        >{{printGameName(game,STRATEGY)}}</h3>
      </a-col>
      <a-col :span="8">
        <h3
          v-for="game of games"
          :key="game.id"
          v-show="printGameName(game,COMMING_SOON)"
        >{{printGameName(game,COMMING_SOON)}}</h3>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { importImgIcon, importImgGames } from "../../../../ultils/importImg";
export default {
  name: "GameByType",
  data() {
    return {
      ROLE_PLAYING: "NHẬP VAI",
      STRATEGY: "CHIẾN THUẬT",
      COMMING_SOON: "GIẢI TRÍ",
    };
  },
  props: {
    games: Array,
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
    importImgGame(url) {
      return importImgGames[url];
    },
    printGameName(game, type) {
      switch (game.category) {
        case type:
          return game.name;
        default:
          return false;
      }
    },
  },
};
</script>

<style src='./style.scss' lang='scss'>
</style>