import { action } from "@storybook/addon-actions"
import {addDecorator} from '@storybook/react'
import {withGlobalStyles} from './withGlobalStyles'

addDecorator(withGlobalStyles)

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__BASE_PATH__ = "/"

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
