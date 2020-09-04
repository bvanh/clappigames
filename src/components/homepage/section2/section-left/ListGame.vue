<template>
  <div class="game-container">
    <div class="title">
      <a class="title-game">
        <img :src="importIcon('icon_game_blue.png')" />
        GAME MOBILE
      </a>
      <a class="title-see-all">
        Xem thêm
        <a-icon type="forward" />
      </a>
    </div>
    <a-row :gutter="32" type="flex">
      <a-col
        :sm="{span:span}"
        :xs="{span:12}"
        v-for="game of games"
        :key="game.id"
        class="game-info"
      >
        <img :src="importImgGame(game.img)" width="100%" class="game-thumbnail" />
        <h3>{{game.name}}</h3>
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