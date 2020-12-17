const webpack = require('webpack');
const { resolve } = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loaders = require('./loaders');
const base = require('./webpack.base');

const mode = process.env.NODE_ENV || 'development';
const isProd = mode === 'production';
const clientLoaders = loaders('client');
const hotMiddlewareScript = `webpack-hot-middleware/client`;

module.exports = {
  ...base,
  target: 'web',

  entry: {
    client: isProd ? './src/client/index.tsx' : ['./src/client/index.tsx', hotMiddlewareScript],
  },

  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [clientLoaders.babel, clientLoaders.ts],
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [clientLoaders.style, clientLoaders.css, clientLoaders.postcss, clientLoaders.sass],
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [clientLoaders.url],
      },
    ],
  },

  plugins: [
    new LoadablePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    ...(isProd
      ? [
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].[hash:8].css',
            chunkFilename: 'static/css/[name].[hash:8].chunk.css',
          }),
        ]
      : [new webpack.HotModuleReplacementPlugin()]),
  ],
};
