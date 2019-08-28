module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://accounts.spotify.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
