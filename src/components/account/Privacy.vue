<template>
  <div class="user-detail">
    <div class="title">
      <a-icon type="lock" />BẢO MẬT
    </div>
    <div class="title-2">
      <h2>THAY ĐỔI MẬT KHẨU</h2>
      <p>Để bảo vệ tài khoản của bạn, bạn nên thường xuyên thay đổi mật khẩu bảo mật.</p>
    </div>
    <div class="detail">
      <h3>Mật khẩu cũ :</h3>
      <a-input />
    </div>
    <div class="detail">
      <h3>Mật khẩu mới :</h3>
      <a-input />
    </div>
    <button class="btn-submit" @click="updateInfo">Cập nhật</button>
    <div class="verify-email">
      <h2>Xác nhận email</h2>
      <p>Bạn nên xác nhận email để bảo vệ tài khoản khi có sự cố.</p>
    </div>
    <div class="verify-email-content">
      <a-icon type="mail" />
      <p>Gửi vào mail <span style="color:red">{{userInfo.email}}</span> để kích hoạt</p>
      <button class="btn-submit" @click="updateInfo">Kích hoạt</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userInfo: Object,
    getInfo: Function,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>