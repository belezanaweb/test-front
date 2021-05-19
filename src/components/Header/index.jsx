import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import { headerData } from 'constants/data/components/header/'

export const Header = ({ step }) => {
  return (
    <S.Header>
      <S.HeaderList>
        {headerData.map((el, index) => {
          return (
            <S.HeaderItem key={el} $step={index === step}>
              {el}
            </S.HeaderItem>
          )
        })}
      </S.HeaderList>
    </S.Header>
  )
}

Header.propTypes = {
  step: PropTypes.number.isRequired
}
