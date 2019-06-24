import React from 'react'

// source: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
export function getDisplayName (Component) {
  return Component.displayName || Component.name || 'Component'
}

export const createHOC = (Component, displayName) => params => BaseComponent => {
  const WrappedComponent = props => (
    <Component {...params}>
      <BaseComponent {...props} />
    </Component>
  )

  const componentDisplayName = displayName || getDisplayName(Component)
  const baseComponentDisplayName = getDisplayName(BaseComponent)
  WrappedComponent.displayName = `with${componentDisplayName}(${baseComponentDisplayName})`

  // eslint-disable-next-line react/forbid-foreign-prop-types
  if (BaseComponent.propTypes) {
    WrappedComponent.propTypes = BaseComponent.propTypes
  }

  return WrappedComponent
}
