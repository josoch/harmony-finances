const webpackConfig = require('./webpack.config');

module.exports = {
  transpileDependencies: true,
  configureWebpack: webpackConfig,
};
