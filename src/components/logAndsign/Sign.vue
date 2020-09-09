<template>
  <a-row class="frame-1" :gutter="40" style="margin:4rem auto !important">
    <a-col :span="16" class="log-img">
      <img :src="importImg('signup.png')" />
    </a-col>
    <a-col :span="24" :lg="{ span: 8 }" class="form-container form-login">
      <h3 class="form-login-title">ĐĂNG KÝ TÀI KHOẢN</h3>
      <a-form id="normal-login" :form="form" class="form" @submit="handleSubmit">
        <a-form-item :validate-status="statusUser.val" :help="statusUser.help">
          <a-input v-decorator="['userName']" placeholder="Tài khoản Clappigames">
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="statusPwd.val" :help="statusPwd.help">
          <a-input v-decorator="['password']" type="password" placeholder="Mật khẩu">
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="statusPhont.val" :help="statusPhone.help">
          <a-input v-decorator="['phone']" type placeholder="Số điện thoại">
            <a-icon slot="prefix" class="icon-phone" type="phone" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="statusMail.val" :help="statusMail.help">
          <a-input v-decorator="['mail']" type="mail" placeholder="Email">
            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item class="form-control">
          <a class="login-form-forgot" href>Quên mật khẩu?</a>
          <a-button type="primary" html-type="submit" class="login-form-button">ĐĂNG NHẬP</a-button>
          <p style="color:black">
            Chưa có tài khoản?
            <a>Đăng ký ngay!</a>
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
  </a-row>
</template>
<script>
import { importImg } from "../../ultils/importImg";
import { validateRegister, statusIpDefault } from "../../ultils/valDefault";
import { register } from "../../ultils/register";
export default {
  data() {
    return {
      logIndex: {
        id: "form-login",
        title: "ĐĂNG NHẬP TÀI KHOẢN",
        statusUser: { ...statusIpDefault },
        statusPwd: { ...statusIpDefault },
        statusPhone: { ...statusIpDefault },
        statusMail: { ...statusIpDefault },
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
        const { username, password,mail,phone } = values;
        if (validateRegister(this, username, password, phone, mail)) {
          register(this, values, values.username);
        }
      });
    },
    importImg(url) {
      return importImg[url];
    },
    resetStatus() {
      this.statusUser = { ...statusIpDefault };
      this.statusPwd = { ...statusIpDefault };
    },
  },
};
</script>

<style src="../homepage/section1/style/slide.scss" lang="scss"></style>
