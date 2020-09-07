<template>
  <a-col :span="24" :lg="{span:8}" class="form-container form-login login-active">
    <!-- <h3 :class="`${log.id}-title`">df</h3> -->
    <a-row class="user-info">
      <a-col :span="8" class="avatar">
        <img src="../../../../assets/icon/avatar.png" width="100%" />
      </a-col>
      <a-col :span="16" class="info">
        <h3>Username</h3>
        <span class="user-id">UserID: 535534</span>
        <h5>VIP 1</h5>
      </a-col>
    </a-row>
    <a-col class="menus">
      <div v-for="menu of controls" :key="menu.id">
        <a-icon :type="menu.icon"></a-icon>
        <span>{{menu.name}}</span>
      </div>
    </a-col>
  </a-col>
</template>
<script>
import { importImgForm } from "../../../../ultils/importImg";
export default {
  name: "Form",
  props: {
    log: Object,
  },
  data() {
    return {
      controls: [
        { id: 1, icon: "user", link: "/account", name: "Tài khoản" },
        { id: 2, icon: "profile", link: "/privacy", name: "Bảo mật" },
        { id: 4, icon: "logout", link: "", name: "Đăng xuất" },
      ],
    };
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