<template>
  <div class="home">
    <Section1 />
    <News />
  </div>
</template>
<script>
// @ is an alias to /src
import Section1 from "../components/homepage/section1/Section1";
import News from "../components/news/News";
export default {
  name: "Home",
  components: {
    Section1,
    News,
  },
};
</script>
