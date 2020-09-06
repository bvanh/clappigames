<template>
  <a-row class="frame-1" :gutter="40">
    <Slide />
    <Form :log="{id:'',title:''}" />
  </a-row>
</template>
<script>
import Slide from "./Slide";
import Form from "./Form";
export default {
  name: "Fame1",
  components: {
    Slide,
    Form,
  },
};
</script>

<style src='./style/slide.scss' lang='scss'>
</style>