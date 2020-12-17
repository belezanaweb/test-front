module.exports = {
  stories: ['../src/shared/components/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', {
            flow: false,
            typescript: true
          }]
        ],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-actions'
  ]
}
