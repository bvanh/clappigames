<template>
  <div class="user-detail">
    <div class="title title-feedback">
      <span>
        <a-icon type="gift" />
        PHẢN HỒI ({{feedbacks.totalElements }})
      </span>
      <a-button icon="mail" class="btn-feedback" @click="switchFeedback(send)">Gửi hỗ trợ</a-button>
    </div>
    <div class="detail-feedback" v-for="item of feedbacks.content" :key="item.id">
      <a-icon type="mail" />
      <div>
        <h2 @click="switchFeedback(detail,item.id)">{{item.title}}</h2>
        <span>Game : {{item.game}}</span>
        <span>Loại hỗ trợ : {{item.topicType}}</span>
      </div>
      <span>{{getDate(item.createAt)}}</span>
    </div>
    <div class="pagination">
      <a-pagination
        size="small"
        :total="feedbacks.totalElements"
        :pageSize="5"
        @change="getPageNumber"
      />
    </div>
  </div>
</template>
<script>
import { controlsFeedback } from "../services";
import { formatDate } from "../../../ultils/format";
const { SEND, DETAIL } = controlsFeedback;
export default {
  props: {
    switchFeedback: Function,
    feedbacks: Object,
    setPageNumFeedback: Function,
  },
  data() {
    return { send: SEND, detail: DETAIL };
  },
  methods: {
    getPageNumber(e) {
      this.setPageNumFeedback(e - 1);
    },
    getDate(date) {
      return formatDate(date);
    },
  },
  //   created() {
  //     this.$emit('switchFeedback');
  //   }
};
</script>

<style src='../style.scss' lang='scss' scoped>
</style>