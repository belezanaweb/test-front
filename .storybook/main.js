module.exports = {
  stories: ['../src/shared/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-actions'
  ]
}
