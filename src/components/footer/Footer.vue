<template>
  <div class="footer">
    <a-row type="flex" justify="space-between" align="end" class="container">
      <a-col class="footer-info" :lg="{ span: 16 }">
        <p>Công ty trách nghiệm hữu hạn Lussom Co.Ltd.</p>
        <p>
          Địa chỉ: Tầng 4, Tòa nhà Eurowindow, Phố Trần Duy Hưng, Phường Trung
          Hòa, Quận Cầu Giấy, TP Hà Nội.
        </p>
        <p>Email: lussom.co@gmail.com</p>
        <p>Điện thoại: 02438453888.</p>
        <p>Chịu trách nghiệm nội dung: Shin Dongseok.</p>
        <p>
          Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng sô
          69/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020.
        </p>
      </a-col>
      <a-col :lg="{ span: 8 }" class="logo">
        <img :src="importHeader('logo-footer.png')" />
        <div>
          <a-icon type="facebook" class="icon-social" />
          <a-icon type="google-plus" class="icon-social" />
          <a-icon type="instagram" class="icon-social"/>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { importImgHeader } from "../../ultils/importImg";
export default {
  name: "footer",
  methods: {
    importHeader(img) {
      return importImgHeader[img];
    },
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>
