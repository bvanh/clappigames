import moment from "moment";
const formatDate = (date) => {
  if (date) {
    return moment(date).format("DD/MM/YYYY");
  }
};
export { formatDate };
