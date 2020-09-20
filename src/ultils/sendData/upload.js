import { baseUpload, baseGetInfoUser } from "../../api/baseApi";
import { api } from "../../api/apiUrl";
import qs from "qs";

const deleteImg = async (thisObj, img_id) => {
  baseUpload
    .post(api.DELETE, qs.stringify({ img_id: img_id }))
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const sendFeedbacks = (
  thisObj,
  topic,
  game,
  character,
  date,
  title,
  content,
  img
) => {
  const feedbacksIndex = {
    topicType: topic,
    game: game,
    characterName: character,
    bugDate: date,
    title: title,
    content: content,
    imageUrl: img,
  };
  baseGetInfoUser
    .post(api.SEND_FEEDBACKS, qs.stringify(feedbacksIndex))
    .then((res) => {
      if (res.status === 200) {
        thisObj.$message.success(`Gửi feedback thành công!`);
        thisObj.refreshFeedbacks();
      }
    })
    .catch((err) => {
      // console.log(err.response)
      thisObj.$error({
        title: err.response.status,
        content: "Có lỗi xảy ra!",
      });
    });
};
export { deleteImg, sendFeedbacks };
