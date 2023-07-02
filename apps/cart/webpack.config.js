require('dotenv/config');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const DotEnvPlugin = require('dotenv-webpack');

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
    port: 3001,
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
        payment: process.env.PAYMENT_APP_URL,
        cart: process.env.CART_APP_URL,
        information: process.env.INFORMATION_APP_URL,
      },
      exposes: {
        './CartProvider': './src/contexts/CartContext',
        './useCartProvider': './src/hooks/useCartProvider',
        './Layout': './src/components/Layout',
        './CartInformation': './src/components/CartInformation',
        './Button': './src/components/Button',
        './Product': './src/components/Product',
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
      },
    }),
    new DotEnvPlugin({
      allowEmptyValues: true,
    }),
  ].filter(Boolean),
};
