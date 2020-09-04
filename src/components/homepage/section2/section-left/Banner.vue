<template>
  <div class="banner">
    <img :src="importImg(bn)" width="100%" />
  </div>
</template>

<script>
import { importImg } from "../../../../ultils/importImg";
export default {
  props: {
    bn: String,
  },
  methods: {
    importImg(url) {
      return importImg[url];
    },
  },
};
</script>

<style>
</style>