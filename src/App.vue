<template>
  <div id="app">
    <Header />
    <router-view />
    <vue-scroll-to-top text="^" :visibleY="250" :duration="300"></vue-scroll-to-top>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import scrollUp from "vue-simple-scroll-up";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    "vue-scroll-to-top": scrollUp,
  },
  created() {
    this.$store.dispatch("getListGames");
    this.$store.dispatch("getDataBanners");
  },
};
</script>
<style lang='scss'>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,700;1,400;1,700&display=swap");
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(../src/assets/background.png) no-repeat;
  background-size: auto;
  background-color: #ebebeb;
  p {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  div,
  ul,
  section,
  button {
    &:focus {
      outline: none;
    }
  }
}
.vue-scroll-button {
  border-radius: 0 !important;
  padding: 0 !important;
  background-color: #0000006e !important;
  bottom: 100px;
  right: 10px;
  font-size: 40px;
  width: 60px;
  height: 50px;
  font-family: monospace;
}
.vue-scroll-button:hover {
  box-shadow: 1px 2px 4px 0px #000 !important;
  transition: 0s !important;
}
.ant-upload-list {
  width: 100%;
  margin-left: .5rem !important;
}
</style>
