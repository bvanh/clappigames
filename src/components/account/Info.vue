<template>
  <div class="user-detail">
    <div class="title">
      <a-icon type="profile" />THÔNG TIN CÁ NHÂN
    </div>
    <div class="detail">
      <h3>Họ và Tên :</h3>
      <a-input :value="userInfo.nickname" name="nickname" @change="getInfoUser" />
    </div>
    <div class="detail">
      <h3>Ngày sinh :</h3>
      <a-date-picker
        :value="formatDate(userInfo.dateOfBirth)"
        :format="dateFormat"
        class="select-birth"
        @change="getDateOfBirth"
      />
    </div>
    <div class="detail id-card">
      <h3>CMND :</h3>
      <div style="width:100%">
        <a-input
          :value="userInfo.identifyCard"
          style="width:30%"
          name="identifyCard"
          @change="getInfoUser"
        />
        <h3>Ngày DK :</h3>
        <a-date-picker
          :value="formatDate(userInfo.dateOfIssue)"
          @change="getDateOfIssue"
          :format="dateFormat"
          class="date"
        />
        <h3>Nơi cấp :</h3>
        <a-input
          :value="userInfo.placeOfIssue"
          style="width:25%"
          name="placeOfIssue"
          @change="getInfoUser"
        />
      </div>
    </div>
    <div class="detail">
      <h3>Giới tính :</h3>
      <a-radio-group :options="options" @change="getGender" :value="userInfo.gender" />
    </div>
    <div class="detail">
      <h3>Nghề nghiệp :</h3>
      <a-input :value="userInfo.job" name="job" @change="getInfoUser" />
    </div>
    <div class="detail">
      <h3>Địa chỉ:</h3>
      <a-input :value="userInfo.address" name="address" @change="getInfoUser" />
    </div>
    <button class="btn-submit" @click="updateInfo">Cập nhật</button>
  </div>
</template>
<script>
// import {formatDate} from '../../ultils/format'
import { updateInfoUser, getInfoUser } from "../../ultils/getData/user";
import moment from "moment";
export default {
  props: {
    getInfo: Function,
  },
  data() {
    return {
      dateFormat: "DD/MM/YYYY",
      options: [
        { label: "Nam", value: "MALE" },
        { label: "Nữ", value: "FEMALE" },
        { label: "Khác", value: "OTHER" },
      ],
      userInfo: {},
    };
  },
  methods: {
    getGender(e) {
      this.gender = e.target.value;
    },
    getInfoUser(e) {
      const { name, value } = e.target;
      this[name] = value;
    },
    getDateOfBirth(e, dateString) {
      this.dateOfBirth = dateString;
    },
    getDateOfIssue(e, dateString) {
      this.dateOfIssue = dateString;
    },
    formatDate(date) {
      console.log(date);
      switch (date) {
        case "":
        case null:
          return "";
        default:
          return moment(date, this.dateFormat);
      }
    },
    updateInfo() {
      updateInfoUser(this);
    },
    moment,
  },
  created() {
    getInfoUser(this);
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>