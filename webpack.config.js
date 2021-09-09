const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true,
    port: 3000
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
}
