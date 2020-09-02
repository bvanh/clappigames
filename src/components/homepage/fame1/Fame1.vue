<template>
  <hooper :infiniteScroll="true" height="100%">
    <slide><img :src="importImg('slide1.jpg')"/></slide>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from "hooper";
import { importImgSlider } from "../../../ultils/importImg";
import "hooper/dist/hooper.css";
export default {
  name: "Fame1",
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        // Any other options that can be got from plugin documentation
      },
    };
  },
  methods: {
    importImg(url) {
      return importImgSlider[url];
    },
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
};
</script>

<style src='./style.scss' lang='scss'>
</style>