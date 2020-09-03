<template>
  <a-col :span="24" class="slide" :lg="{span:16}">
    <button @click="slidePrev" class="btn-control-prev">
      <a-icon type="left" />
    </button>
    <button @click="slideNext" class="btn-control-next">
      <a-icon type="right" />
    </button>
    <hooper :infiniteScroll="true" ref="carousel" height="100%">
      <slide>
        <img :src="importImg('slide1.jpg')" class="img-slide" />
      </slide>
      <slide>
        <img :src="importImg('slide1.jpg')" class="img-slide" />
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      <!-- <hooper-navigation slot="hooper-addons"></hooper-navigation> -->
    </hooper>
  </a-col>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import { importImgSlider } from "../../../ultils/importImg";
import "hooper/dist/hooper.css";
export default {
  name: "Slider",
  data() {
    return { carouselData: 0 };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    importImg(url) {
      return importImgSlider[url];
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    // HooperNavigation,
  },
};
</script>

<style src='./style/slide.scss' lang='scss'>
</style>