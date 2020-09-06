<template>
  <a-col :span="24" :lg="{span:8}" class="form-container form-login">
    <!-- <h3 :class="`${log.id}-title`">df</h3> -->
    <a-row class="user-info">
      <a-col :span="8" class="avatar">
        <img src="../../../../assets/icon/avatar.png" width="100%" />
      </a-col>
      <a-col :span="16" class="info">
        <h3>Username</h3>
        <span>UserID: 535534</span>
        <h5>VIP 1</h5>
      </a-col>
    </a-row>
    <a-col></a-col>
  </a-col>
</template>
<script>
import { importImgForm } from "../../../../ultils/importImg";
export default {
  name: "Form",
  props: {
    log: Object,
  },
  methods: {
    importImg(url) {
      return importImgForm[url];
    },
  },
};
</script>
<style src='../style/form.scss' lang='scss'>
</style>