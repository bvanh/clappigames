<template>
  <a-row class="frame-1" :gutter="40" style="margin:4rem auto !important">
    <a-col :span="16" class="log-img">
      <img :src="importImg('login.png')" />
    </a-col>
    <Form :log="logIndex" />
  </a-row>
</template>
<script>
import Form from "../homepage/section1/Form";
import { importImg } from "../../ultils/importImg";
export default {
  data() {
    return {
      logIndex: {
        id: "form-login",
        title: "ĐĂNG NHẬP TÀI KHOẢN",
      },
    };
  },
  components: {
    Form,
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