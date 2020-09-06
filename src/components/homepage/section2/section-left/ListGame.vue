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
        :sm="{span:span}"
        :xs="{span:12}"
        v-for="game of games"
        :key="game.id"
        class="game-info"
      >
        <router-link :to="`/games/${game.id}`">
          <img :src="importImgGame(game.img)" width="100%" class="game-thumbnail" />
        </router-link>
        <h3>
          <router-link :to="`/games/${game.id}`">{{game.name}}</router-link>
        </h3>
        <div>
          {{game.type}}
          <span>
            <img :src="importIcon('icon_people.png')" />
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
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>