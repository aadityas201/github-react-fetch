const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "api",
    createProxyMiddleware({
      target: "https://aadityas201.pythonanywhere.com/",
      changeOrigin: true,
    })
  );
};
