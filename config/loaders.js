const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.NODE_ENV === 'production';

module.exports = (target) => {
  const isServer = target === 'server';

  return {
    babel: {
      loader: 'babel-loader',
    },
    ts: {
      loader: 'ts-loader',
    },
    style: !isServer && prod ? MiniCssExtractPlugin.loader : 'style-loader',
    css: isServer ? { loader: 'css-loader', options: { modules: { exportOnlyLocals: true } } } : 'css-loader',
    sass: 'sass-loader',
    postcss: 'postcss-loader',
    url: {
      loader: 'url-loader',
      options: {
        limit: 8192,
        emitFile: !isServer,
        name: 'static/media/[name].[hash:8].[ext]',
      },
    },
  };
};
