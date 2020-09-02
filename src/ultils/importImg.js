function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const importImgHeader = importAll(
  require.context("../assets/header", false, /\.(png|jpe?g|svg)$/)
);
const importImgSlider = importAll(
  require.context("../assets/slider", false, /\.(png|jpe?g|svg)$/)
);
// const importImgBestSeller = importAll(
//   require.context("../assets/bestseller", false, /\.(png|jpe?g|svg)$/)
// )
// const importImgCategory = importAll(
//   require.context("../assets/category", false, /\.(png|jpe?g|svg)$/)
// )
// const importImgFooter = importAll(
//   require.context("../assets/footer", false, /\.(png|jpe?g|svg)$/)
// )
export { importImgHeader, importImgSlider };
