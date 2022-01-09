module.exports = {
  publicPath: "/",
  transpileDependencies: [
    'vuex-module-decorators'
  ],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/themes/index.scss";`
      }
    }
  }
}
