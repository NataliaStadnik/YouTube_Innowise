/* eslint-disable no-undef */
const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env) => ({
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  devtool: env.prod ? false : 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    host: 'localhost',
    static: {
      directory: './src',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g)$/i,
        loader: 'file-loader',
        options: {
          name() {
            env.prod ? '[contenthash].[ext]' : '[path][name].[ext]';
          },
        },
      },
      {
        test: /\.woff2$/i,
        type: 'asset/resource',
      },
      {
        test: /\.scss$/i,
        use: [
          env.prod ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'YouTube',
      template: path.resolve(__dirname, './index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
  ],

  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              multipass: true,
              plugins: ['preset-default'],
            },
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
});
