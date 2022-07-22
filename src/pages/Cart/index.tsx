import React from 'react'
import loadable from '@loadable/component'

const Header = loadable(() => import('../../components/Header'), {
  resolveComponent: (components) => components.Header
})

export const Cart = () => {
  return (
    <Header
      items={[
        {
          label: 'sacola'
        },
        {
          label: 'pagamento'
        },
        {
          label: 'confirmação'
        }
      ]}
    />
  )
}
