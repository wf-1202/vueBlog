const path = require("path");
const Timestamp = new Date().getTime(); // 时间戳

// cdn预加载使用
const externals = {
  vue: "Vue",
  "vue-router": "VueRouter",
  vuex: "Vuex",
  axios: "axios",
  vant: "vant"
};

const cdn = {
  // 开发环境
  dev: {
    css: ["https://cdn.jsdelivr.net/npm/vant@2.2.13/lib/index.css"],
    js: []
  },
  // 生产环境
  build: {
    css: ["https://cdn.jsdelivr.net/npm/vant@2.2.13/lib/index.css"],
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js",
      "https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js",
      "https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js"
    ]
  }
};
module.exports = {
  chainWebpack: config => {
    /**
     *  添加分析工具
     */
    if (process.env.NODE_ENV === "production") {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
        config.plugins.delete("prefetch");
      }
    }

    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin("html").tap(args => {
      if (process.env.NODE_ENV === "production") {
        args[0].cdn = cdn.build;
      }
      if (process.env.NODE_ENV === "development") {
        args[0].cdn = cdn.dev;
      }
      return args;
    });
  },

  publicPath: "./",
  // outputDir: "dist",
  configureWebpack: {
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${process.env.TERM_PROGRAM_VERSION}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.TERM_PROGRAM_VERSION}.${Timestamp}.js`
    }
    // externals: process.env.NODE_ENV === "production" ? externals : {}
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-plugin-px2rem")({
  //           rootValue: 10,
  //           exclude: /(node_module)/, //不转换node_module中的px 如：vant
  //           mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
  //           minPixelValue: 0 //设置要替换的最小像素值(3px会被转rem)。 默认 0
  //         })
  //       ]
  //     }
  //   }
  // },

  productionSourceMap: false,

  devServer: {
    // open: "Chrome",
    port: 9004,
    host: "0.0.0.0", //"0.0.0.0"  localhost
    proxy: {
      "/app": {
        target: "http://127.0.0.1:8081/",
        changeOrigin: true
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "./src/assets/less/global.less"),
        path.resolve(__dirname, "./src/assets/less/index.less")
      ]
    }
  }
};
