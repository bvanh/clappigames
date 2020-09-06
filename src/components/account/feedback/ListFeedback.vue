<template>
  <div class="user-detail">
    <div class="title title-feedback">
      <span>
        <a-icon type="gift" />PHẢN HỒI (1)
      </span>
      <a-button icon="mail" class="btn-feedback" @click="switchFeedback(send)">Gửi hỗ trợ</a-button>
    </div>
    <div class="detail-feedback">
      <a-icon type="mail" />
      <div>
        <h2 @click="switchFeedback(detail)">Báo lỗi vật phẩm khi đi ải?</h2>
        <span>Game : Liên quân ma thuật</span>
        <span>Loại hỗ trợ : Lỗi vật phẩm trong game</span>
      </div>
      <span>2020/10/10</span>
    </div>
  </div>
</template>
<script>
import { controlsFeedback } from "../services";
const { SEND, DETAIL } = controlsFeedback;
export default {
  props: {
    switchFeedback: Function,
  },
  data() {
    return { send: SEND, detail: DETAIL };
  },
  //   created() {
  //     this.$emit('switchFeedback');
  //   }
};
</script>

<style src='../style.scss' lang='scss' scoped>
</style>