<template>
  <a-col :span="24" class="slide" :lg="{span:16}">
    <button @click="slidePrev" class="btn-control-prev">
      <a-icon type="left" />
    </button>
    <button @click="slideNext" class="btn-control-next">
      <a-icon type="right" />
    </button>
    <hooper :infiniteScroll="true" ref="carousel" height="100%">
      <slide v-for="slide of sliders" :key="slide.imgUrl">
        <img :src="slide.imgUrl" class="img-slide" />
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
  </a-col>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import { getSliders } from "../../../ultils/getData/sliders";
import { api, type } from "../../../api/apiUrl";
import { importImgSlider } from "../../../ultils/importImg";
import "hooper/dist/hooper.css";
const { HOME } = type.sliders;
const { SLIDERS } = api;
export default {
  name: "Slider",
  data() {
    return {
      carouselData: 0,
      sliders: [],
      params: {
        type: HOME,
      },
    };
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
  created() {
    getSliders(this, SLIDERS, this.params);
  },
};
</script>

<style src='./style/slide.scss' lang='scss'>
</style>