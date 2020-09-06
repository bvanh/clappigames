<template>
  <div class="user-detail">
    <div class="title">
      <a-icon type="profile" />THÔNG TIN CÁ NHÂN
    </div>
    <div class="detail">
      <h3>Họ và Tên :</h3>
      <a-input value="demo" />
    </div>
    <div class="detail">
      <h3>Ngày sinh :</h3>
      <a-date-picker
        :default-value="moment('2015/01/01', dateFormat)"
        :format="dateFormat"
        class="select-birth"
      />
    </div>
    <div class="detail id-card">
      <h3>CMND :</h3>
      <div style="width:100%">
        <a-input value="demo" style="width:30%" />
        <h3>Ngày DK :</h3>
        <a-date-picker
          :default-value="moment('2015/01/01', dateFormat)"
          :format="dateFormat"
          class="date"
        />
        <h3>Nơi cấp :</h3>
        <a-input value="demo" style="width:25%" />
      </div>
    </div>
    <div class="detail">
      <h3>Giới tính :</h3>
      <a-radio-group :options="options" @change="onChange1" />
    </div>
    <div class="detail">
      <h3>Nghề nghiệp :</h3>
      <a-input value="demo" />
    </div>
    <div class="detail">
      <h3>Địa chỉ:</h3>
      <a-input value="demo" />
    </div>
    <button class="btn-submit">Cập nhật</button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      dateFormat: "YYYY/MM/DD",
      options: [
        { label: "Nam", value: "Male" },
        { label: "Nữ", value: "Female" },
        { label: "Khác", value: "Other" },
      ],
    };
  },
  methods: {
    onChange1(e) {
      console.log("radio1 checked", e.target.value);
    },
    moment,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>