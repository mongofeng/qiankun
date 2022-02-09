/* eslint-disable  */

const proxyUrl = {
  test: "http://120.26.59.65:18194",
  local: "http://192.168.18.58:8194",
};

const { name } = require('./package');
module.exports = {
  lintOnSave: false,
  publicPath: 'http://localhost:9999/',
  productionSourceMap: false,

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
      // config.resolve.alias = {
      //   vue$: "vue/dist/vue.esm.js",
      // };
    }
    config.output = {
      ...config.output,
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    }
  },

  devServer: {
    open: true,
    port: 9999,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/dev-api": {
        target: proxyUrl.test,
        pathRewrite: {
          "^/dev-api": "",
        },
        // 是否跨域，若是，将主机标头的原点更改为目标URL
        changeOrigin: true,
      },
    },
  },
};
