<template>
  <div class="home">
    <Header />
    <Section1 />
    <Section2 />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header/Header";
import Section1 from "../components/homepage/section1/Section1";
import Section2 from "../components/homepage/section2/Section2";
export default {
  name: "Home",
  components: {
    Header,
    Section1,
    Section2,
  },
};
</script>
