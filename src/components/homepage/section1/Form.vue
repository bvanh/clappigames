<template>
  <component :is="switchLogin(isLogin)" :log="log" :isLogin="isLogin"></component>
</template>
<script>
import FormActive from "./form/FormActive";
import FormInActive from "./form/FormInActive";
import { importImgForm } from "../../../ultils/importImg";
export default {
  name: "Form",
  props: {
    log: Object,
  },
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    importImg(url) {
      return importImgForm[url];
    },
    switchLogin(isLogin) {
      switch (isLogin) {
        case true:
          return FormActive;
        default:
          return FormInActive;
      }
    },
  },
};
</script>
<style src='./style/form.scss' lang='scss'>
</style>