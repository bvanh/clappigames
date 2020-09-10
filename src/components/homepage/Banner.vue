<template>
  <div class="banner">
    <img :src="printImg(bn)" width="100%" />
  </div>
</template>
<script>
import { importImg } from "../../ultils/importImg";
export default {
  props: {
    bn: Object,
  },
  methods: {
    importImg(url) {
      return importImg[url];
    },
    printImg(img) {
      if (img) {
        return img.image;
      }
      return "";
    },
  },
};
</script>
<style>
</style>