<template>
  <a-row class="frame-1" :gutter="40" style="margin: 4rem auto !important">
    <a-col :span="16" class="log-img">
      <img :src="importImg('signup.png')" />
    </a-col>
    <a-col :span="24" :lg="{ span: 8 }" class="form-container form-login">
      <h3 class="form-login-title">
        ĐĂNG KÝ {{ isRegisSuccess ? "THÀNH CÔNG" : "TÀI KHOẢN" }}
      </h3>
      <a-form
        id="normal-login"
        :form="form"
        class="form"
        @submit="handleSubmit"
        v-if="!isRegisSuccess"
      >
        <a-form-item :validate-status="statusUser.val" :help="statusUser.help">
          <a-input
            v-decorator="['username']"
            placeholder="Tài khoản Clappigames"
            @mousedown="resetStatus"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="statusPwd.val" :help="statusPwd.help">
          <a-input-password
            v-decorator="['password']"
            placeholder="Mật khẩu"
            @mousedown="resetStatus"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-item>
        <a-form-item
          :validate-status="statusPhone.val"
          :help="statusPhone.help"
        >
          <a-input
            v-decorator="['mobile']"
            type
            placeholder="Số điện thoại"
            @mousedown="resetStatus"
          >
            <a-icon
              slot="prefix"
              class="icon-phone"
              type="phone"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item :validate-status="statusMail.val" :help="statusMail.help">
          <a-input
            v-decorator="['email']"
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
        <a-checkbox
          @change="onChangeIsAgree"
          :checked="isAgreePrivacy"
          class="isAgree"
          style="margin-bottom: 8px"
        >
          <span :class="[isAgreePrivacy ? '' : 'notIsAgree']"
            >Tôi đồng ý với các thỏa thuận sử dụng.</span
          >
        </a-checkbox>
        <a-form-item class="form-control">
          <a-button type="primary" html-type="submit" class="login-form-button"
            >ĐĂNG KÝ</a-button
          >
          <p style="color: black">
            Bạn đã có tài khoản?
            <router-link to="login">Đăng nhập!</router-link>
          </p>
        </a-form-item>
      </a-form>
      <a-form
        id="normal-login"
        class="form"
        style="margin-top: 1.5rem"
        v-if="isRegisSuccess"
      >
        <a-form-item class="form-control">
          <a-button type="primary" html-type="submit" class="login-form-button">
            <router-link to="/" @click="resetStatus">VỀ TRANG CHỦ</router-link>
          </a-button>
        </a-form-item>
      </a-form>
      <!-- <hr />
      <p class="text-or">Hoặc</p>
      <div class="icon-social">
        <a-icon type="facebook" class="icon-social-fb" />
        <a-icon type="google-plus" class="icon-social-gg" />
      </div> -->
    </a-col>
  </a-row>
</template>
<script>
import { importImg } from "../../ultils/importImg";
import { statusIpDefault } from "../../ultils/valDefault";
import { validateRegister } from "../../ultils/validate";
import { register } from "../../ultils/register";
import cookieService from "@/ultils/cookieService";
export default {
  data() {
    return {
      logIndex: {
        id: "form-login",
        title: "ĐĂNG NHẬP TÀI KHOẢN",
      },
      isRegisSuccess: false,
      isAgreePrivacy: true,
      statusUser: { ...statusIpDefault },
      statusPwd: { ...statusIpDefault },
      statusPhone: { ...statusIpDefault },
      statusMail: { ...statusIpDefault },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    onChangeIsAgree(e) {
      this.isAgreePrivacy = e.target.checked;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        const { username, password, email, mobile } = values;
        if (validateRegister(this, username, password, mobile, email)) {
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
      this.statusPhone = { ...statusIpDefault };
      this.statusMail = { ...statusIpDefault };
      this.isRegisSuccess = false;
    },
  },
  beforeMount() {
    //console.log(cookieService.getToken());
    const { username } = cookieService.getToken();
    if (username) this.$router.push("login");
  },
  beforeDestroy() {
    this.resetStatus();
  },
};
</script>
<style src="../homepage/section1/style/slide.scss" lang="scss">
</style>
