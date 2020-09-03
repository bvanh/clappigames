<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="16" class="list-game">
      <ListGame :games="games" />
      <ListGameByType :games="games" />
    </a-col>
    <a-col :span="8" class="category" style="padding:0">
      <Category :games="games" />
    </a-col>
  </a-row>
</template>
<script>
import ListGame from "./section-left/ListGame";
import ListGameByType from "./section-left/ListGameByType";
import Category from "./section-right/Category";
export default {
  name: "Fame2",
  data() {
    return {
      games: [
        {
          id: 1,
          name: "Liên Quân Ma Thuật",
          type: "Game mobile",
          category: "CHIẾN THUẬT",
          view: 1000,
          img: "img2.jpg",
          icon: "icon_game.png",
        },
        {
          id: 2,
          name: "3Q Phản Công",
          type: "Game mobile",
          category: "NHẬP VAI",
          view: 10400,
          img: "img2.jpg",
          icon: "icon_game.png",
        },
        {
          id: 3,
          name: "Comming soon",
          type: "Game mobile",
          category: "GIẢI TRÍ",
          view: 1010,
          img: "img2.jpg",
          icon: "icon_game.png",
        },
      ],
    };
  },
  components: {
    ListGame,
    ListGameByType,
    Category,
  },
};
</script>

<style src='./section-left/style.scss' lang='scss' scoped>
</style>