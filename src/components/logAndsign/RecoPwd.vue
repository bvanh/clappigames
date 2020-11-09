<template>
  <a-row class="frame-1" :gutter="40" style="margin: 4rem auto !important">
    <a-col :span="16" class="log-img">
      <img :src="importImg('signup.png')" />
    </a-col>
    <a-col :span="24" :lg="{ span: 8 }" class="form-container form-login">
      <h3 class="form-login-title" style="margin-bottom: 1rem">
        KHÔI PHỤC MẬT KHẨU
      </h3>
      <a-form
        id="normal-login"
        :form="form"
        class="form"
        @submit="handleSubmit"
      >
      <a-form-item :validate-status="mailIndex.status" :help="mailIndex.help">
          <a-input
            v-decorator="['mail']"
            type="mail"
            placeholder="Email"
            @mousedown="resetStatus"
          >
            <a-icon
              slot="prefix"
              type="mail"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item class="form-control">
          <a-button type="primary" html-type="submit" class="login-form-button"
            >GỬI</a-button
          >
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script>
import { importImg } from "../../ultils/importImg";
import { statusIpDefault } from "../../ultils/valDefault";
import { recoveryPassword } from "../../ultils/getData/user";
export default {
  data() {
    return {
      mailIndex: {
        status: "warning",
        help: "Nhập email để nhận mật khẩu mới.",
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        const { mail } = values;
        if (mail) recoveryPassword(this, mail);
      });
    },
    importImg(url) {
      return importImg[url];
    },
    resetStatus() {
      this.mailIndex = { ...statusIpDefault };
    },
  },
};
</script>
<style src="../homepage/section1/style/slide.scss" lang="scss">
</style>
