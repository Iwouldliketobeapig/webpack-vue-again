const BaseConf = require('./webpack.base.conf');
const webpack = require('webpack');
const path = require('path');
const chalk = require('chalk');
const root = process.cwd();
const merge = require('webpack-merge')
const config = require(root + '/config/default');
const CommonsChunkPlugin = require('./CommonsChunkPlugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const devWebpack = merge(BaseConf, {
  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: '[id].js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loaders: 'eslint-loader'
      }
    ]
  },
  devServer: {
    proxy: {
      '/api/v2': 'http://172.19.3.186:25001'
    },
    contentBase: path.join(root, 'dist'),
    historyApiFallback: true,
    hot: true,
    compress: true,
    port: 9000,
    after () {
      console.log('this proxy host and port is ' + chalk.yellow(config.proxy.target) + 
      ' and this api version is ' + chalk.yellow(config.proxy.apiVersion));
    }
  },
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new CommonsChunkPlugin(2, {
      names: ['verdon2', 'verdon1'],
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({
      files: ['**/*.s?(a|c)ss', '**/*.vue'],
      syntax: 'scss'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ]
})

module.exports = devWebpack;
