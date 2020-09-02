<template>
  <a-row class="frame-1">
    <a-col :span="16">
      <hooper :infiniteScroll="true" height="100%">
        <slide>
          <img :src="importImg('slide1.jpg')" width="100%"/>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </a-col>
    <a-col :span="8">

    </a-col>
  </a-row>
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
    return {};
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