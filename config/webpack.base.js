const mode = process.env.NODE_ENV || 'development';
const isProd = mode === 'production';

module.exports = {
  mode,
  devtool: isProd ? 'hidden-source-map' : 'inline-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    minimize: isProd,
    runtimeChunk: true,
  },
};
