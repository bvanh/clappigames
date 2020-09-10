<template>
  <div class="user-detail">
    <div class="title">
      <a-icon type="user" />TÀI KHOẢN
    </div>
    <div class="detail">
      <h3>UserName :</h3>
      <span>{{username}}</span>
    </div>
    <div class="detail">
      <h3>UserID :</h3>
      <span>{{userInfo.fakeId}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userInfo: Object,
    username: String,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>