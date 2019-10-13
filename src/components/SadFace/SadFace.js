import React from 'react'
import { StyledSadFace } from './style.js'
import { func } from 'prop-types'
import Button from 'components/Button'

/**
 * This is a util component show a error and permit a user to retry
 * @param {Promise} retryPromise - A function which is executed can retry the flow
 */
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

SadFace.propTypes = {
  retryPromise: func.isRequired
}

export default SadFace
