import React from 'react'
import { Wrapper } from './styles'

const Image = ({ alt, className, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true)

  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <Wrapper className={className}>
      {skeleton && <div className="skeleton"> </div>}
      <img onLoad={handleLoad} className="img" alt={alt} {...props} />
    </Wrapper>
  )
}

export default Image
