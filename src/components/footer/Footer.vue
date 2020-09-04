<template>
  <div class="footer">
    <a-row type="flex" justify="space-between" class="container">
      <a-col class="footer-info" :lg="{ span: 16,order:2 }" :order="2">
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
      <a-col :lg="{ span: 8,order:2 }" :order="1" class="logo">
        <img :src="importHeader('logo-footer.png')" />
        <div>
          <a-icon type="facebook" class="icon-social fb" />
          <a-icon type="google-plus" class="icon-social gg" />
          <a-icon type="instagram" class="icon-social" />
        </div>
      </a-col>
    </a-row>
    <div class="footer-end">
      <a-row type="flex" justify="space-between">
        <a-col class="footer-info" :lg="{ span: 16 }">
          <ul>
            <li v-for="menu of listMenuFt" :key="menu.id">
              <a :href="menu.url" target="_blank">{{menu.name}}</a>
            </li>
          </ul>
        </a-col>
        <a-col :span="8" style="text-align:right" class="coppy-right">
          <a-icon type="copyright" />ClappiGames Co,.Ltd. All Rights Reserved
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { importImgHeader } from "../../ultils/importImg";
export default {
  name: "footer",
  data() {
    return {
      listMenuFt: [
        {
          id: 1,
          name: "CSKH",
          url: "https://www.facebook.com/clappigames",
        },
        {
          id: 2,
          name: "GAMES",
          url: "",
        },
        {
          id: 3,
          name: "TIN TỨC",
          url: "",
        },
        {
          id: 4,
          name: "ĐIỀU KHOẢN",
          url: "",
        },
        {
          id: 5,
          name: "BẢO MẬT",
          url: "",
        },
      ],
    };
  },
  methods: {
    importHeader(img) {
      return importImgHeader[img];
    },
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>
