function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const importImg = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);
const importImgHeader = importAll(
  require.context("../assets/header", false, /\.(png|jpe?g|svg)$/)
);
const importImgSlider = importAll(
  require.context("../assets/slider", false, /\.(png|jpe?g|svg)$/)
);
const importImgIcon = importAll(
  require.context("../assets/icon", false, /\.(png|jpe?g|svg)$/)
);
const importImgGames = importAll(
  require.context("../assets/games", false, /\.(png|jpe?g|svg)$/)
);
export {
  importImg,
  importImgHeader,
  importImgSlider,
  importImgIcon,
  importImgGames,
};
