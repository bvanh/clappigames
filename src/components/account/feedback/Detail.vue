<template>
  <div class="user-detail">
    <div class="title title-feedback">
      <span>
        <a-icon type="gift" />
        <span style="color:black">TIỀU ĐỀ :</span>
        <span style="margin-left:.5rem">{{detail.title}}</span>
      </span>
      <a-button
        icon="double-left"
        class="btn-feedback-back"
        @click="switchFeedback(isType)"
      >Quay lại</a-button>
    </div>
    <div class="username">
      <!-- <img :src="importIcon('avatar.png')" /> -->
      <h3>{{username}}</h3>
      <span>{{getDate(detail.createAt)}}</span>
    </div>
    <div class="detail">
      <h3>Game :</h3>
      <span>{{detail.game}}</span>
    </div>
    <div class="detail">
      <h3>Loại hỗ trợ :</h3>
      <span>{{detail.topicType}}</span>
    </div>
    <div class="detail detail-content">
      <h3>Nội dung :</h3>
      <span>{{detail.content}}</span>
    </div>
    <div class="detail" style="align-items:end">
      <h3>Tệp đính kèm :</h3>
      <img :src="detail.imageUrl" style="width:60px"/>
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
import { getFeedbackDetail } from "../../../ultils/getData/user";
import { formatDate } from "../../../ultils/format";
import cookieService from "../../../ultils/cookieService";
const { OVERVIEW } = controlsFeedback;
export default {
  props: {
    switchFeedback: Function,
    detailId: Number,
  },
  data() {
    return {
      isType: OVERVIEW,
      username:"",  
      detail: {
        bugDate: "",
        characterName: "",
        content: "",
        createAt: "",
        game: "",
        id: "",
        imageUrl: "",
        title: "",
        topicType: "",
      },
    };
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
    getDate(date) {
      return formatDate(date);
    },
  },
  created() {
    const { username } = cookieService.getToken();
    this.username = username;
    getFeedbackDetail(this, `/${this.detailId}`);
  },
};
</script>

<style src='../style.scss' lang='scss' scoped>
</style>