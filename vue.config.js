module.exports = {
  devServer: {
    port: 2080,
    disableHostCheck: true,
    https: false,
    // clientLogLevel: 'warning',
    inline: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  },
};
