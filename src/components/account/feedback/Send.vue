<template>
  <div class="user-detail">
    <div class="title title-feedback">
      <span>
        <a-icon type="gift" />YÊU CẦU HỖ TRỢ
      </span>
      <a-button icon="double-left" class="btn-feedback-back" @click="switchFeedback(isType)">Quay lại</a-button>
    </div>
    <div class="detail">
      <h3>
        Game
        <i>*</i> :
      </h3>
      <a-select default-value="jack" style="width: 100%" @change="handleChange">
        <a-select-option value="jack">Jack</a-select-option>
      </a-select>
    </div>
    <div class="detail">
      <h3>
        Chủ đề
        <i>*</i> :
      </h3>
      <a-select default-value="jack" style="width: 100%" @change="handleChange">
        <a-select-option value="jack">Jack</a-select-option>
      </a-select>
    </div>
    <div class="detail">
      <h3>
        Tiêu đề
        <i>*</i>
      </h3>
      <a-select default-value="jack" style="width: 100%" @change="handleChange">
        <a-select-option value="jack">Jack</a-select-option>
      </a-select>
    </div>
    <div class="detail">
      <h3>Tên nhật vật :</h3>
      <a-input value="demo" />
    </div>
    <div class="detail">
      <h3>Ngày :</h3>
      <a-input value="demo" />
    </div>
    <div class="detail">
      <h3>Nội dung :</h3>
      <a-textarea placeholder="Nội dung" :auto-size="{ minRows: 3, maxRows: 5 }" />
    </div>
    <div class="detail">
      <h3>Tệp đính kèm :</h3>
      <div>
        <label for="cv">
          <span class="btn-upload">
            <img src="../../../assets/icon/attach.png" />
            Tải lên
          </span>
          <span style="margin-left:1rem">
            <!-- {{
            cv === null ? "Chưa chọn tập tin..." : cv.name
            }}-->
            Chưa chọn tập tin...
          </span>
        </label>
      </div>
      <input
        placeholder="Your CV"
        id="cv"
        type="file"
        name="cv"
        accept=".pdf, .docx"
        style="display: none;"
      />
    </div>
    <button class="btn-submit">Cập nhật</button>
    <button class="btn-cancel" @click="switchFeedback(isType)">Hủy</button>
  </div>
</template>
<script>
import { controlsFeedback } from "../services";
const { OVERVIEW } = controlsFeedback;
export default {
  props: {
    switchFeedback: Function,
  },
   data() {
    return { isType: OVERVIEW };
  },
};
</script>

<style src='../style.scss' lang='scss' scoped>
</style>