<template>
  <a-row class="frame-1" :gutter="40">
    <a-col :span="24"  :lg="{span:16}" class="section-left">
      <div class="news-container page-news">
        <div class="title">
          <div>
            <a
              :class="`title-game ${menu.id===isActiveMenu?'menu-active':''} title-${menu.subClass}`"
              v-for="menu of menus"
              :key="menu.id"
              @click="setActiveMenu(menu.id)"
            >
              <div :class="`${menu.id===isActiveMenu?'rectangle':''} ${menu.subClass}`"></div>
              <img :src="importIcon(menu.icon1)" />
              {{menu.name}}
              <img :src="importIcon(menu.icon2)" class="dots" />
            </a>
          </div>
          <h3 class="title-news">[CHÍNH THỨC] RA MẮT LIÊN QUÂN MA THUẬT TRÊN IOS</h3>
          <router-link to="/news" class="title-see-all">
            Xem thêm
            <a-icon type="forward" />
          </router-link>
        </div>
        <div class="content">
          <div class="col-12 mt-3">
            <h5 class="font-weight-bold">[CHÍNH THỨC] RA MẮT LIÊN QUÂN MA THUẬT TRÊN IOS</h5>
          </div>
          <div class="col-12">
            <img
              src="https://clappigames.com/static/images/news/clock.png"
              style="width: 11px; height: 11px"
              class="float-left"
            />
            <span class="ml-2" style="font-size: 12px; color: #8f8f8f">15/07/2019</span>
          </div>
          <div class="col-12 mt-3" id="news-content">
            <p>
              Sau bao ngày mong ngóng, chờ đợi thì phiên bản chính thức của Liên Quân Ma Thuật đã có mặt trên Appstore, các bạn hay truy cập ngay:
              <a
                href="https://apps.apple.com/vn/app/id1455948758"
                target="_blank"
              >https://apps.apple.com/vn/app/id1455948758</a> hoặc tìm kiếm "Liên Quân Ma Thuật" để tải ngay game về nhé.
              <br />
            </p>
            <div style="text-align: center;">
              <br />
              <div style="text-align: left;">
                &nbsp;Sau khi cài Game xong hãy nhanh chóng inbox Fanpage
                <a
                  href="https://www.facebook.com/lienquanmathuat"
                  target="_blank"
                >Liên Quân Ma Thuật</a> để nhận VIP code để trải nghiệm Game nha &lt;3&nbsp;
                <br />&nbsp;Và đừng quên truy cập:
                <a
                  href="https://nap.clappigames.com/"
                  target="_blank"
                >https://nap.clappigames.com/</a> để nạp ngay C-coin vào Game cho mình rồi nhé.
                <br />Còn chờ gì nữa mà không truy cập ngay để chơi game nào &lt;3
                <br />
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </a-col>
    <a-col :span="8" class="section-right" style="padding:0">
      <Category :games="getGames" />
      <Banner :bn="bn" />
      <Fb />
    </a-col>
  </a-row>
</template>
<script>
import Category from "../homepage/section2/section-right/Category";
import Banner from "../homepage/Banner";
import Fb from "../homepage/Fb";
import { importImgIcon } from "../../ultils/importImg";
export default {
  data() {
    return {
      isActiveMenu: 1,
      bn: "banner2.jpg",
      menus: [
        {
          id: 1,
          name: "TẤT CẢ",
          subClass: "all",
          icon1: "icon_news_black.png",
          icon2: "icon_dots.png",
        },
        {
          id: 2,
          name: "TIN TỨC",
          subClass: "news",
          icon1: "",
          icon2: "icon_dots.png",
        },
      ],
    };
  },
  computed: {
    getGames() {
      return this.$store.getters.games;
    },
  },
  methods: {
    importIcon(url) {
      return importImgIcon[url];
    },
    setActiveMenu(id) {
      this.isActiveMenu = id;
    },
  },
  components: {
    Category,
    Banner,
    Fb,
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>