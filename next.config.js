const { join } = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')],
  },
  images: {
    domains: ['https://res.cloudinary.com'],
  },
}
