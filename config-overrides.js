const { override, addBabelPlugins } = require('customize-cra')
module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '~': './src'
      }
    }
  ])
)
