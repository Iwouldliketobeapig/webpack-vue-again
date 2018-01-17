const BaseConf = require('./webpack.base.conf');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CommonsChunkPlugin = require('./CommonsChunkPlugin');

const watchWebpack = merge(BaseConf, {
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new CommonsChunkPlugin(0, {
      names: ['verdon2', 'verdon1'],
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ]
})

module.exports = watchWebpack;
