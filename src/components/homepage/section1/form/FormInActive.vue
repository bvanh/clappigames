<template>
  <a-col :span="24" :lg="{span:8}" :class="`form-container ${log.id}`">
    <h3 :class="`${log.id}-title`">{{log.title}}</h3>
    <a-form id="normal-login" :form="form" class="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Kiểm tra lại tên đăng nhập!' }] },
        ]"
          placeholder="Tài khoản Clappigames"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Kiểm tra lại mật khẩu!' }] },
        ]"
          type="password"
          placeholder="Mật khẩu"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item class="form-control">
        <a class="login-form-forgot" href>Quên mật khẩu?</a>
        <a-button type="primary" html-type="submit" class="login-form-button">ĐĂNG NHẬP</a-button>
        <p style="color:black">
          Chưa có tài khoản?
          <router-link to='register'>Đăng ký ngay!</router-link>
        </p>
      </a-form-item>
    </a-form>
    <hr />
    <p class="text-or">Hoặc</p>
    <div class="icon-social">
      <a-icon type="facebook" class="icon-social-fb" />
      <a-icon type="google-plus" class="icon-social-gg" />
    </div>
  </a-col>
</template>
<script>
import { importImgForm } from "../../../../ultils/importImg";
export default {
  name: "Form",
  props: {
    log: Object,
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    importImg(url) {
      return importImgForm[url];
    },
  },
};
</script>
<style src='../style/form.scss' lang='scss'>
</style>