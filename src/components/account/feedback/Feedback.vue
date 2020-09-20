<template>
  <keep-alive>
    <component
      :is="setContentFeedback(isContentFb)"
      :switchFeedback="switchFeedback"
      :feedbacks="feedbacks"
      :setPageNumFeedback="setPageNumFeedback"
      :refreshFeedbacks="refreshFeedbacks"
      :detailId="detailId"
    ></component>
  </keep-alive>
</template>
<script>
import Detail from "./Detail";
import Send from "./Send";
import ListFeedback from "./ListFeedback";
import { controlsFeedback } from "../services";
const { DETAIL, SEND, OVERVIEW } = controlsFeedback;
export default {
  props: {
    feedbacks: Object,
    setPageNumFeedback: Function,
    refreshFeedbacks: Function,
  },
  data() {
    return {
      isContentFb: OVERVIEW,
      detailId: null,
    };
  },
  methods: {
    switchFeedback(type, detailId) {
      this.isContentFb = type;
      this.detailId = detailId;
    },
    setContentFeedback(type) {
      switch (type) {
        case DETAIL:
          return Detail;
        case SEND:
          return Send;
        default:
          return ListFeedback;
      }
    },
  },
};
</script>

<style src='../style.scss' lang='scss' scoped>
</style>