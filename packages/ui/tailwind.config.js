/* eslint-disable @typescript-eslint/no-var-requires */
const sharedConfig = require('tailwind-config/tailwind.config.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: 'ui-',
  presets: [sharedConfig]
}
