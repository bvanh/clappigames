<template>
  <component :is="switchLogin()" :log="log" :isLogin="isLogin"></component>
</template>
<script>
import FormActive from "./form/FormActive";
import FormInActive from "./form/FormInActive";
import { importImgForm } from "../../../ultils/importImg";
import { checkToken } from "../../../ultils/checkToken";
export default {
  name: "Form",
  props: {
    log: Object,
  },
  data() {
    return {
      isLogin: this.$store.getters.isLogin,
    };
  },
  methods: {
    importImg(url) {
      return importImgForm[url];
    },
    switchLogin() {
      switch (this.$store.getters.isLogin) {
        case true:
          return FormActive;
        default:
          return FormInActive;
      }
    },
  },
  created() {
    if (checkToken()) {
      this.$store.dispatch("logout");
    }else{
      this.$store.dispatch("login");
    }
    
  },
};
</script>
<style src='./style/form.scss' lang='scss'>
</style>