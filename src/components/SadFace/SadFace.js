import React from 'react'
import { StyledSadFace } from './style.js'
import Button from 'components/Button'

function SadFace({ retryPromise }) {
  return (
    <>
      <StyledSadFace>
        <div className='sad-face'>
          <span className='eye' />
          <span className='eye right' />
          <div className='mouth' />
        </div>
      </StyledSadFace>
      <Button onClick={retryPromise}>Carregar novamente</Button>
    </>
  )
}

export default SadFace
