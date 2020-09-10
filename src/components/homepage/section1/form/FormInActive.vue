<template>
  <a-col :span="24" :lg="{span:8}" :class="`form-container ${log.id}`">
    <h3 :class="`${log.id}-title`">{{log.title}}</h3>
    <a-form id="normal-login" :form="form" class="form" @submit="handleSubmit">
      <a-form-item :validate-status="statusUser.val" :help="statusUser.help">
        <a-input
          v-decorator="['username']"
          placeholder="Tài khoản Clappigames"
          @mousedown="resetStatus"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="statusPwd.val" :help="statusPwd.help">
        <a-input
          type="password"
          v-decorator="['password']"
          placeholder="Mật khẩu"
          @mousedown="resetStatus"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item class="form-control">
        <a class="login-form-forgot" href>Quên mật khẩu?</a>
        <a-button type="primary" html-type="submit" class="login-form-button">ĐĂNG NHẬP</a-button>
        <p style="color:black">
          Chưa có tài khoản?
          <router-link to="register">Đăng ký ngay!</router-link>
        </p>
      </a-form-item>
    </a-form>
    <hr />
    <p class="text-or">Hoặc</p>
    <div class="icon-social">
      <a-icon type="facebook" class="icon-social-fb" />
      <button class="button" @click="logInWithFacebook"> Login with Facebook</button>
      <GoogleLogin :params="params" :onSuccess="onSuccessGg" class="btn-gg">
        <a-icon type="google-plus" class="icon-social-gg" />
      </GoogleLogin>
    </div>
  </a-col>
</template>
<script>
import { importImgForm } from "../../../../ultils/importImg";
import { login, ggLogin } from "../../../../ultils/login";
import { api } from "../../../../api/apiUrl";
import { validateLogin } from "../../../../ultils/validate";
import { statusIpDefault, socialId } from "../../../../ultils/valDefault";
import GoogleLogin from "vue-google-login";
// import facebookLogin from "facebook-login-vuejs";
const { LOGIN } = api;
export default {
  name: "Form",
  props: {
    log: Object,
  },
  data() {
    return {
      statusUser: statusIpDefault,
      statusPwd: statusIpDefault,
      params: {
        client_id: socialId.googleClappiId,
      },
      idFb: socialId.facebookFakeId,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    onSuccessFb(fbUser){
      console.log(fbUser)
    },
    onSuccessGg(ggUserIndex) {
      const { id_token } = ggUserIndex.wc;
      ggLogin(this, id_token);
      console.log(ggUserIndex);
    },
    onFailure() {},
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        const { username, password } = values;
        if (validateLogin(this, username, password)) {
          login(this, LOGIN, values, values.username);
        }
      });
    },
    importImg(url) {
      return importImgForm[url];
    },
    resetStatus() {
      this.statusUser = statusIpDefault;
      this.statusPwd = statusIpDefault;
    },
    
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "630380541117442", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    } 
  },
  components: {
    GoogleLogin,
    // facebookLogin,
  },
};
</script>
<style src='../style/form.scss' lang='scss'>
</style>