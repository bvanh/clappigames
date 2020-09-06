<template>
  <div class="user-detail">
    <div class="title title-feedback">
      <span>
        <a-icon type="gift" />
        <span style="color:black">TIỀU ĐỀ :</span>
        <span>THÔNG BÁO MẤT VẬT PHẨM</span>
      </span>
      <a-button
        icon="double-left"
        class="btn-feedback-back"
        @click="switchFeedback(isType)"
      >Quay lại</a-button>
    </div>
    <div class="username">
      <img :src="importIcon('avatar.png')" />
      <h3>UserNmae</h3>
      <span>2020/20/20</span>
    </div>
    <div class="detail">
      <h3>Game :</h3>
      <span>Liên quân ma thuật</span>
    </div>
    <div class="detail">
      <h3>Loại hỗ trợ :</h3>
      <span>Lỗi server</span>
    </div>
    <div class="detail detail-content">
      <h3>Nội dung :</h3>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.</span>
    </div>
    <div class="detail">
      <h3>Tệp đính kèm :</h3>
      <a>demo.png</a>
    </div>
    <div class="username" style="border-top:1px solid #ece2e2;padding-top:1rem">
      <img :src="importIcon('icon_clappi.png')" />
      <h3>Clappigames</h3>
      <span>2020/20/20</span>
    </div>
    <div class="detail detail-content">
      <h3>Trả lời :</h3>
      <span
        style="color:red"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    </div>
  </div>
</template>
<script>
import { importImgIcon } from "../../../ultils/importImg";
import { controlsFeedback } from "../services";
const { OVERVIEW } = controlsFeedback;
export default {
  props: {
    switchFeedback: Function,
  },
  data() {
    return { isType: OVERVIEW };
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
  },
};
</script>

<style src='../style.scss' lang='scss' scoped>
</style>