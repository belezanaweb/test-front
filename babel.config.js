module.exports = {
  presets: [
    ['@babel/preset-react'],
    ['@babel/env'],
    // '@vue/app'
  ],
  plugins: [
    ['transform-react-jsx'],
    ['@babel/plugin-syntax-dynamic-import'],
    ["@babel/transform-runtime", {
      "regenerator": true
    }]
  ]
};
