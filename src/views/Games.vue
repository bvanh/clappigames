<template>
  <div class="home">
    <Section1 />
    <Section2 />
  </div>
</template>
<script>
// @ is an alias to /src
import Section1 from "../components/homepage/section1/Section1";
import Section2 from "../components/game/Section2";
export default {
  name: "Home",
  components: {
    Section1,
    Section2,
  },
};
</script>
