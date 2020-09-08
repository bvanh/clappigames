<template>
  <div class="banner">
    <img :src="bn.image" width="100%" />
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
  },
};
</script>
<style>
</style>