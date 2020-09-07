<template>
  <div class="game-detail">
    <img src="../../assets/games/banner.png" width="100%" class="game-banner"/>
    <div class="menu">
      <div>
        <span>
          <img :src="importImg('icon_game.png')" />
          <h3>3Q Phản Công</h3>
        </span>
        <a>Trang chủ</a>
        <img :src="importIcon('icon_dots.png')" />
        <a href="https://www.facebook.com/3QZVN/" target="_blank">Fanpage</a>
        <img :src="importImg('android.png')" />
        <img :src="importImg('ios.png')" />
      </div>
    </div>
    <a-row class="frame-1" :gutter="40">
      <a-col :span="24" :lg="{span:16}" class="video" style="padding-left:0">
        <youtube-media :video-id="videoId"></youtube-media>
      </a-col>
      <Form :log="{id:'',title:''}" />
    </a-row>
    <a-row class="section2" :gutter="40">
      <a-col :span="24" :lg="{span:16}" class="section-left">
        <div class="title">
          <a class="title-game">
            <img :src="importIcon('icon_game_blue.png')" />
            GIỚI THIỆU
          </a>
          <router-link to="/news" class="title-see-all">
            Xem thêm
            <a-icon type="forward" />
          </router-link>
        </div>
        <div class="content-intro-game">
          <p>3Q Phản Công là trò chơi nhập vai trực tuyến nhiều người chơi của Hàn Quốc, được phát triển bởi Công ty NBRO CO.,LTD và nhượng quyền cho Công ty CLAPPI GAME CO.,LTD trong việc kinh doanh, phân phối trò chơi. Trò chơi đã được ra mắt ở nhiều thị trường trên thế giới như Hàn Quốc, Đài Loan, Singapore, Indonesia, Philippines, Malaysia. Tại Việt Nam, 3Q Phản Công được chuyển giao cho đối tác chính của Công ty CLAPPI GAME CO.,LTD là Công ty TNHH LUSSOM. Phiên bản trò chơi được phát hành tại Việt Nam sẽ là phiên bản do nhà sản xuất thiết kế tinh chỉnh để phù hợp với văn hóa và luật pháp tại Việt Nam.</p>
          <p style="text-align: center; ">
            <img
              src="https://cms.cubegame.vn/static/uploads/1BA3F861-D4F2-4D97-9F78-38633155EC27/1581302896.jpg"
              style="width: 100%;"
              class="img-fluid"
            />
          </p>
          <p style="text-align: center; ">
            <br />
          </p>
          <p
            style="text-align: left;"
          >Câu chuyện về thế giới của 3Q Phản Công lấy bối cảnh tương lai. Sau một thảm kịch khiến dịch bệnh Zombie lan tràn, thế giới đã trở nên điêu tàn. Những người sống sót phải tập trung lại với nhau, thành lập căn cứ và cố gắng chiến đấu đẩy lùi những sinh vật Zombie nguy hiểm.</p>
          <p
            style="text-align: left;"
          >Trước tình hình đó, các nhà khoa học đã sử dụng công nghệ tiên tiến để đưa các anh hùng của thời đại Tam Quốc đến thế giới tương lai, dẫn dắt loài người chiến đấu chống lại Zombie.</p>
          <p style="text-align: left;">
            Trò chơi diễn ra theo cốt truyện mang đậm màu sắc phiêu lưu kỳ thú. Người chơi sẽ nhập vai vị chỉ huy của đội quân loài người, điều khiển các vị anh hùng (cũng chính là các đội trưởng của đội quân), xây dựng binh lực hùng mạnh để chinh phục những thử thách.
            <span
              style="font-size: 0.875rem;"
            >Nhiệm vụ của người chơi là đánh bại đám Zombie, đồng thời khám phá những hành trình phiêu lưu đầy kịch tính xuyên suốt trò chơi.</span>
          </p>
          <p style="text-align: left;">
            <b>1. Hệ thống lực lượng phong phú, sưu tập thả ga</b>
          </p>
          <p style="text-align: center;">
            <img
              src="https://cms.cubegame.vn/static/uploads/5A6DC0B0-B02B-40FB-BA2C-3C42EC442B89/1589962088.jpg"
              style="width: 100%;"
              class="img-fluid"
            />
            <b>
              <br />
            </b>
          </p>
          <p
            style="text-align: left;"
          >Hệ thống lực lượng trong 3Q Phản Công vô cùng đa dạng và hoành tráng. Mỗi lực lượng đều có bộ kĩ năng và ngoại hình khác biệt. Để phối hợp bộ kĩ năng của từng lực lượng trở thành một đội hình mạnh nhất là vấn đề cực kì khó suy nghĩ. Liệu Chỉ Huy có đủ can đảm tham gia vào chiến trường khóc liệt này?</p>
          <p style="text-align: left;">
            <b>2. Sưu tập vũ khí, đột phá sức mạnh</b>
          </p>
          <p style="text-align: left;"></p>
          <div style="text-align: center;">
            <img
              src="https://cms.cubegame.vn/static/uploads/5A6DC0B0-B02B-40FB-BA2C-3C42EC442B89/1589962081.jpg"
              style="width: 100%;"
              class="img-fluid"
            />
            <b>
              <br />
            </b>
          </div>
          <div style="text-align: center;">
            <br />
          </div>
          <div
            style="text-align: left;"
          >Kho vũ khí đồ sộ cũng như sức mạnh của trang bị giúp cho các Đội Trưởng trở lên vô cùng mạnh mẽ trong chiến trận. Khi sưu tập đủ vũ khí và trang bị yêu cầu, Đội Trưởng sẽ được khoác lên mình những trang phục cực chất cực ngầu.&nbsp;</div>
          <div style="text-align: left;">
            <br />
          </div>
          <div style="text-align: left;">
            <b>3. Nhiều chế độ chơi, pk thả ga</b>
          </div>
          <div style="text-align: left;">
            <b>
              <br />
            </b>
          </div>
          <div style="text-align: center;">
            <img
              src="https://cms.cubegame.vn/static/uploads/5A6DC0B0-B02B-40FB-BA2C-3C42EC442B89/1589962146.jpg"
              style="width: 100%;"
              class="img-fluid"
            />
            <b>
              <br />
            </b>
          </div>
          <div style="text-align: center;">
            <b>
              <br />
            </b>
          </div>
          <div
            style="text-align: left;"
          >Bạn sẽ không phải lo lắng, buồn chán nếu như không có gì để làm vì 3Q Phản Công có rất nhiều chế độ chơi, chơi thỏa thích mà không bao giờ hết. Bên cạnh đó, sự tranh đấu giữa những Chỉ Huy sẽ giúp bạn không bao giờ nhàm chán.</div>
          <div style="text-align: left;">
            <br />
          </div>
          <div
            style="text-align: left;"
          >Tham gia 3Q Phản Công ngay để trải nghiệm siêu phẩm Săn Zombie chất nhất 2020 nào!</div>
          <div style="text-align: left;">
            <br />
          </div>
          <div style="text-align: left;">
            <b>Tải game tại:</b>
          </div>
          <ul>
            <li style="text-align: left;">Chplay: https://bit.ly/36fZrtR&nbsp;</li>
            <li style="text-align: left;">
              Appstore:
              <a href="https://apple.co/2XgtP35" target="_blank">https://apple.co/2XgtP35</a>
            </li>
            <li style="text-align: left;">APK: https://3qphancong.lussom.vn/&nbsp;</li>
          </ul>
          <br />
          <p></p>
        </div>
      </a-col>
      <a-col :span="8" class="section-right">
        <Category :games="getGames" />
        <Banner :bn="bn2" />
        <Fb />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Form from "../homepage/section1/Form";
import Category from "../homepage/section2/section-right/Category";
import Banner from "../homepage/Banner";
import Fb from "../homepage/Fb";
import { getIdFromURL } from "vue-youtube-embed";
import { importImgGames, importImgIcon } from "../../ultils/importImg";
export default {
  data() {
    return {
      videoId: getIdFromURL("https://youtu.be/gfqQK0GR3go"),
      bn2: "banner2.jpg",
    };
  },
  methods: {
    importImg(url) {
      return importImgGames[url];
    },
    importIcon(url) {
      return importImgIcon[url];
    },
  },
  computed: {
    getGames() {
      return this.$store.getters.games;
    },
  },
  components: {
    Form,
    Category,
    Banner,
    Fb,
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>