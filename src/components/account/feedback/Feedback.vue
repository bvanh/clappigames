<template>
  <component :is="setContentFeedback(isContentFb)" :switchFeedback="switchFeedback"></component>
</template>
<script>
import Detail from "./Detail";
import Send from "./Send";
import ListFeedback from "./ListFeedback";
import { controlsFeedback } from "../services";
const { DETAIL, SEND, OVERVIEW } = controlsFeedback;
export default {
  data() {
    return {
      isContentFb: OVERVIEW,
    };
  },
  methods: {
    switchFeedback(type) {
      this.isContentFb = type;
      console.log(type)
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