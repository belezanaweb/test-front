import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'

const ImageOverlay = styled.div`
  height: ${({ height }) => height};
  margin: 0 auto;
  position: relative;
  width: ${({ width }) => width};

  ::after {
    background-image: url(${({ image }) => image});
    background-position-x: ${({ x }) => x};
    background-position-y: ${({ y }) => y};
    background-repeat: no-repeat;
    opacity: ${({ opacity }) => opacity};
    content: '';
    display: ${({ show }) => (show ? 'block' : 'none')};
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: ${({ zIndex }) => zIndex};
  }
`

ImageOverlay.propTypes = {
  height: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  opacity: PropTypes.number,
  show: PropTypes.bool,
  width: PropTypes.string.isRequired,
  x: PropTypes.string,
  y: PropTypes.string,
  zIndex: PropTypes.number
}

ImageOverlay.defaultProps = {
  opacity: 0.5,
  position: 'center center',
  show: false,
  x: 'center',
  y: 'center',
  zIndex: -1
}

export default ImageOverlay
