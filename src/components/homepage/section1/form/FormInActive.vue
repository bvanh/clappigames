<template>
  <a-col :span="24" :lg="{ span: 8 }" :class="`form-container ${log.id}`">
    <h3 :class="`${log.id}-title`">{{ log.title }}</h3>
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
        <a-input-password
          v-decorator="['password']"
          placeholder="Mật khẩu"
          @mousedown="resetStatus"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input-password>
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
      <a-icon type="facebook" class="icon-social-fb" @click="logInWithFacebook" />
      <!-- <button class="button" @click="logInWithFacebook">Login with Facebook</button> -->
      <GoogleLogin :params="params" :onSuccess="onSuccessGg" class="btn-gg">
        <a-icon type="google-plus" class="icon-social-gg" />
      </GoogleLogin>
    </div>
  </a-col>
</template>
<script>
import { importImgForm } from "../../../../ultils/importImg";
import { login, socialLogin } from "../../../../ultils/login";
import { api } from "../../../../api/apiUrl";
import { validateLogin } from "../../../../ultils/validate";
import { statusIpDefault, socialId } from "../../../../ultils/valDefault";
import GoogleLogin from "vue-google-login";
const { LOGIN, LOGIN_FB, LOGIN_GG } = api;
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
      fb: window.FB,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    logOut() {
      window.FB.logout((res) => {
        console.log(res);
      });
    },
    loginFb() {
      this.$store.dispatch("login");
    },
    async logInWithFacebook() {
      this.fb.login((res) => {
        if (res.authResponse) {
          console.log(res);
          const { accessToken } = res.authResponse;
          this.fb.api(
            "/me",
            "GET",
            { fields: "id,name,email,picture" },
            (user) => {
              const { name, picture } = user;
              const socialIndex = {
                username: name,
                avatar: picture.data.url,
              };
              // this.personalID = user.id;
              // this.email = user.email;
              // this.name = user.name;
              // this.picture = user.picture.data.url;
              socialLogin(this, LOGIN_FB, accessToken, socialIndex);
              console.log(user);
            }
          );
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    onSuccessGg(ggUserIndex) {
      const { id_token } = ggUserIndex.wc;
      const { $t, iK } = ggUserIndex.rt;
      const socialIndex = {
        username: $t,
        avatar: iK,
      };
      socialLogin(this,LOGIN_GG, id_token, socialIndex);
      // console.log(ggUserIndex);
    },
    onFailure() {},
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        const { username, password } = values;
        const userIndex = {
          username: username,
          avatar:
            "http://5002047-s3user.cloudstorage.com.vn/clappigames/lqmt/CPlcHdroW-avatar.png",
        };
        if (validateLogin(this, username, password)) {
          login(this, LOGIN, values, userIndex);
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
  },
  components: {
    GoogleLogin,
  },
};
</script>
<style src="../style/form.scss" lang="scss"></style>
