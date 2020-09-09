export default {
  games: (state) => state.listGames,
  gameDetail: (state) => (name) =>
    state.listGames.filter((game) => game.shortName === name),
  gamesHot: (state) => state.listGames.filter((game) => game.gameHot === 1),
  gamesNew: (state) => state.listGames.filter((game) => game.gameNew === 1),
  // banners
  banners: (state) => state.banners,
};
