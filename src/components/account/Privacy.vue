<template>
  <div class="user-detail">
    <div class="title">
      <a-icon type="lock" />BẢO MẬT
    </div>
    <div class="title-2">
      <h2>THAY ĐỔI MẬT KHẨU</h2>
      <p>Để bảo vệ tài khoản của bạn, bạn nên thường xuyên thay đổi mật khẩu bảo mật.</p>
    </div>
    <div class="detail-input">
      <h3>Mật khẩu cũ :</h3>
      <a-form-item :validate-status="oldPwdIndex.val" :help="oldPwdIndex.help">
        <a-input name="oldPassword" @change="getPassword" @mousedown="reset"/>
      </a-form-item>
    </div>
    <div class="detail-input">
      <h3>Mật khẩu mới :</h3>
      <a-form-item :validate-status="newPwdIndex.val" :help="newPwdIndex.help">
        <a-input name="newPassword" @change="getPassword" @mousedown="reset"/>
      </a-form-item>
    </div>
    <button class="btn-submit" @click="submitUpdate">Cập nhật</button>
    <div class="verify-email">
      <h2>Xác nhận email</h2>
      <p>Bạn nên xác nhận email để bảo vệ tài khoản khi có sự cố.</p>
    </div>
    <div class="verify-email-content">
      <a-icon type="mail" />
      <p>
        Gửi vào mail
        <span style="color:red">{{userInfo.email}}</span> để kích hoạt
      </p>
      <button class="btn-submit">Kích hoạt</button>
    </div>
  </div>
</template>
<script>
import { updatePassword } from "../../ultils/getData/user";
import { statusIpDefault } from "../../ultils/valDefault";
export default {
  props: {
    userInfo: Object,
    getInfo: Function,
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      oldPwdIndex: {
        ...statusIpDefault,
      },
      newPwdIndex: {
        ...statusIpDefault,
      },
    };
  },
  methods: {
    getPassword(e) {
      const { name, value } = e.target;
      this[name] = value;
    },
    submitUpdate() {
      const { oldPassword, newPassword } = this;
      updatePassword(this, oldPassword, newPassword);
    },
    reset() {
      this.oldPwdIndex = statusIpDefault;
      this.newPwdIndex = statusIpDefault;
    },
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>