const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src', '/'),
      '@components': path.resolve(__dirname, 'src', 'components')
    }
  }
}
