import { Card, Title } from 'components'
import React, { FC } from 'react'

export const Cart: FC<{ children?: never }> = () => {
  return (
    <>
      <Title>Produtos</Title>
      <Card>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quae nisi laboriosam magnam
        nesciunt temporibus aut, a ratione sequi, error deleniti vitae est repudiandae? Reiciendis
        voluptatem neque in eligendi velit ab maxime eius labore magni, dolor accusamus laborum
        repudiandae alias, commodi quaerat? Blanditiis vitae dolores impedit sunt, illo provident
        sequi?
      </Card>
    </>
  )
}
