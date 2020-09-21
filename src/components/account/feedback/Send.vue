<template>
  <div class="user-detail">
    <div class="title title-feedback">
      <span>
        <a-icon type="gift" />YÊU CẦU HỖ TRỢ
      </span>
      <a-button
        icon="double-left"
        class="btn-feedback-back"
        @click="switchFeedback(isType)"
      >Quay lại</a-button>
    </div>
    <div class="detail">
      <h3>
        Game
        <i>*</i> :
      </h3>
      <a-select :value="game" style="width: 100%" @change="handleChangeGame">
        <a-select-option v-for="game of games" :value="game" :key="game">{{game}}</a-select-option>
      </a-select>
    </div>
    <div class="detail">
      <h3>
        Chủ đề
        <i>*</i> :
      </h3>
      <a-select :value="topic" style="width: 100%" @change="handleChangeTopic">
        <a-select-option v-for="(item, index) of listErrs" :value="item" :key="index">{{ item }}</a-select-option>
      </a-select>
    </div>
    <div class="detail">
      <h3>Tiêu đề :</h3>
      <a-input :value="title" @change="handleChange" name="title" placeholder="Tiêu đề" />
    </div>
    <div class="detail">
      <h3>Tên nhật vật :</h3>
      <a-input
        :value="character"
        @change="handleChange"
        name="character"
        placeholder="Tên nhân vật"
      />
    </div>
    <div class="detail">
      <h3>Ngày :</h3>
      <a-date-picker
        :value="formatDate(date)"
        format="DD/MM/YYYY"
        class="select-birth"
        @change="getDate"
      />
    </div>
    <div class="detail">
      <h3>Nội dung :</h3>
      <a-textarea
        placeholder="Nội dung"
        @change="handleChangeContent"
        :v-model="content"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </div>
    <div class="detail">
      <h3>Tệp đính kèm :</h3>
      <div>
        <a-upload
          name="file"
          action="http://localhost:3002/upload"
          @change="handleChangeFile"
          :remove="handRemoveFile"
          class="upload"
        >
          <a-button :class="`btn-upload ${btnUpload}`">
            <a-icon type="upload" />Tải lên
          </a-button>
        </a-upload>
      </div>
    </div>
    <button class="btn-submit" @click="sendFeedbacks">Gửi</button>
    <button class="btn-cancel" @click="switchFeedback(isType)">Hủy</button>
  </div>
</template>
<script>
import moment from "moment";
import { controlsFeedback } from "../services";
import { deleteImg, sendFeedbacks } from "../../../ultils/sendData/upload";
import { listErrs, games } from "./services";
const { OVERVIEW } = controlsFeedback;
export default {
  props: {
    switchFeedback: Function,
    refreshFeedbacks: Function,
  },
  data() {
    return {
      isType: OVERVIEW,
      btnUpload: "",
      listErrs: listErrs,
      games: games,
      title: "",
      character: "",
      topic: "Lỗi sự kiện",
      game: "Clappigames",
      date: "",
      imageUrl: "",
      content: "",
    };
  },
  methods: {
    sendFeedbacks() {
      const { topic, game, character, date, title, content, imageUrl } = this;
      sendFeedbacks(
        this,
        topic,
        game,
        character,
        date,
        title,
        content,
        imageUrl
      );
    },
    handleChange(e) {
      const { name, value } = e.target;
      this[name] = value;
    },
    handleChangeGame(e) {
      this.game = e;
    },
    handleChangeTopic(val) {
      this.topic = val;
    },
    handleChangeContent(e) {
      this.content = e.target.value;
    },
    getDate(e, dateString) {
      this.date = dateString;
    },
    formatDate(date) {
      switch (date) {
        case "":
          return "";
        default:
          return moment(date, "DD/MM/YYYY");
      }
    },
    handleChangeFile(info) {
      if (info.file.status === "uploading") {
        this.btnUpload = "upload-active";
      }
      if (info.file.status === "done") {
        const { secure_url } = info.file.response;
        this.imageUrl = secure_url;
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    handRemoveFile(info) {
      const { public_id } = info.response;
      deleteImg(this, public_id);
      this.btnUpload = "";
      this.imageUrl = "";
    },
  },
};
</script>

<style src="../style.scss" lang="scss" scoped></style>
