/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const config = require('../../../config/webpack.client.config');

const compiler = webpack(config);

export const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  index: false,
  publicPath: '/',
  serverSideRender: true,
});

export const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  reload: true,
  path: '/__webpack_hmr',
});
