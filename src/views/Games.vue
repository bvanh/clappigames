<template>
  <div class="home">
    <Section1 />
    <Game />
  </div>
</template>
<script>
// @ is an alias to /src
import Section1 from "../components/homepage/section1/Section1";
import Game from "../components/game/Game";
export default {
  name: "Home",
  components: {
    Section1,
    Game,
  },
};
</script>
