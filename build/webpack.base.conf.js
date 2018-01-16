const Entry = require('./webpack.entry');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const root = process.cwd();
const config = {
  entry: Object.assign({}, Entry, {
    verdon1: ['vue', 'normalize.css', 'vuex'],
    verdon2: ['$css/common.css', '$js/common.js']
  }),
  output: {
    publicPath: '/',
    path: path.resolve(root, 'dist'),
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'id.[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      $components: path.resolve(root, 'src/assert/components'),
      $css: path.resolve(root, 'src/assert/css'),
      $js: path.resolve(root, 'src/assert/js'),
      $tem: path.resolve(root, 'src/assert/templates'),
      $vuex: path.resolve(root, 'src/assert/vuex'),
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              minmize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/imgs/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 8048,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'static/css/[name].[contenthash].css',
      allChunks: true
    })
  ]
};
const nameKeys = Object.keys(Entry);
const htmlPlugins = nameKeys.map(key => new HtmlWebpackPlugin({
  filename: `templates/${key}.html`,
  inject: 'true',
  template: 'src/assert/templates/index.html',
  chunks: [key, 'verdon1', 'verdon2'],
  hash: true
})
);
config.plugins = config.plugins.concat(htmlPlugins);

module.exports = config;
