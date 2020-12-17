const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const base = require('./webpack.base');
const loaders = require('./loaders');

const serverLoaders = loaders('server');

module.exports = {
  ...base,
  target: 'node',

  node: {
    __dirname: false,
  },

  entry: {
    server: './src/server/index.ts',
  },

  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [serverLoaders.babel, serverLoaders.ts],
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [serverLoaders.style, serverLoaders.css, serverLoaders.postcss, serverLoaders.sass],
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [serverLoaders.url],
      },
    ],
  },

  externals: [nodeExternals()],

  plugins: [new LoadablePlugin()],
};
