<template>
  <div class="game-by-type">
    <a-row class="list-games" type="flex">
      <a-col :span="8" class="li-games-1">
        <a class="title-game">
          <img :src="importIcon('icon_game_black.png')" />
          NHẬP VAI
        </a>
        <img :src="importIcon('icon_dots.png')" class="dots" />
        <h3
          v-for="game of games"
          :key="game.id"
          v-show="printGameName(game,ROLE_PLAYING)"
        >{{printGameName(game,ROLE_PLAYING)}}</h3>
      </a-col>
      <a-col :span="8" class="li-games-2">
        <a class="title-game">
          <img :src="importIcon('icon_game_black.png')" />
          CHIẾN THUẬT
        </a>
        <img :src="importIcon('icon_dots.png')" class="dots" />
        <h3
          v-for="game of games"
          :key="game.id"
          v-show="printGameName(game,STRATEGY)"
        >{{printGameName(game,STRATEGY)}}</h3>
      </a-col>
      <a-col :span="8" class="li-games-3">
        <a class="title-game">
          <img :src="importIcon('icon_game_black.png')" />
          GIẢI TRÍ
        </a>
        <h3
          v-for="game of games"
          :key="game.id"
          v-show="printGameName(game,CASUAL)"
        >{{printGameName(game,CASUAL)}}</h3>
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
      ROLE_PLAYING: "ROLE_PLAYING",
      STRATEGY: "STRATEGY",
      CASUAL: "CASUAL",
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
          return game.fullName;
        default:
          return false;
      }
    },
  },
};
</script>

<style src='./style.scss' lang='scss'>
</style>