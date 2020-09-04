<template>
  <div class="banner">
    <img :src="importImg('banner.jpg')" width="100%" />
  </div>
</template>

<script>
import { importImg } from "../../../../ultils/importImg";
export default {
  methods: {
    importImg(url) {
      return importImg[url];
    },
  },
};
</script>

<style>
</style>