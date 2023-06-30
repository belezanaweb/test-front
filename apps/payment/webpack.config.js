const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const { name, dependencies } = require('./package.json');

const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './index.tsx',
  target: 'web',
  mode: isProductionMode ? 'production' : 'development',
  devtool: isProductionMode ? 'source-map' : 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'auto',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3002,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: isProductionMode ? '[name].[contenthash].css' : '[name].css',
    }),
    !isProductionMode && new ReactRefreshWebpackPlugin(),
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: {
        cart: 'cart@http://localhost:3001/remoteEntry.js',
      },
      exposes: {
        './CreditCardForm': './src/components/CreditCardForm',
      },
      shared: {
        ...dependencies,
        react: {
          requiredVersion: dependencies.react,
          import: 'react',
          shareKey: 'react',
          shareScope: 'default',
          singleton: true,
          eager: true,
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
          singleton: true,
          eager: true,
        },
        // TODO: remove this
        // 'react-router-dom': {
        //   requiredVersion: dependencies['react-router-dom'],
        //   singleton: true,
        //   eager: true,
        // },
        // 'react-hook-form': {
        //   requiredVersion: dependencies['react-hook-form'],
        //   singleton: true,
        //   eager: true,
        // },
        // '@hookform/resolvers': {
        //   requiredVersion: dependencies['@hookform/resolvers'],
        //   singleton: true,
        //   eager: true,
        // },
        // 'tailwind-variants': {
        //   requiredVersion: dependencies['tailwind-variants'],
        //   singleton: true,
        //   eager: true,
        // },
        // 'tailwind-merge': {
        //   requiredVersion: dependencies['tailwind-merge'],
        //   singleton: true,
        //   eager: true,
        // },
        // 'react-number-format': {
        //   requiredVersion: dependencies['react-number-format'],
        //   singleton: true,
        //   eager: true,
        // },
        // 'card-validator': {
        //   requiredVersion: dependencies['card-validator'],
        //   singleton: true,
        //   eager: true,
        // },
        // yup: {
        //   requiredVersion: dependencies.yup,
        //   singleton: true,
        //   eager: true,
        // },
      },
    }),
  ].filter(Boolean),
};
