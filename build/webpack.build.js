const BaseConf = require('./webpack.base.conf');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');
const merge = require('webpack-merge');
const root = process.cwd();

let buildWebpack = merge(BaseConf, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["verdon2","verdon1"],
      minChunks: Infinity
    }),
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(["dist"], root),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
});

module.exports = buildWebpack;