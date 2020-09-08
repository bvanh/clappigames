export default {
  games: (state) => state.listGames,
  gameDetail: (state) => (name) =>
    state.listGames.filter((game) => game.shortName === name),
  // banners
  banners: (state) => state.banners,
};
