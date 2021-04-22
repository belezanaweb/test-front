import React from 'react'

import { Container } from './styles'

const WrapperFlex = ({
  children,
  desktopOnly,
  flex,
  column,
  justifyCenter,
  justifySpaceBetween,
  justifyEnd,
  justifyStart,
  justifySpaceAround,
  justifySpaceEvenly,
  alignStart,
  alignCenter,
  alignEnd,
  marginTop,
  marginBottom,
  marginSides,
  padding,
  paddingSides,
  paddingLeft,
  halfWidth,
  fullWidth,
  height,
  width,
  percentage,
  wrap,
  overflowHidden,
  onClick = null,
  input,
  animation,
  duration,
  marginLeft,
  ...props
}) => (
  <Container
    {...props}
    flex={flex}
    percentage={percentage}
    desktopOnly={desktopOnly}
    paddingLeft={paddingLeft}
    column={column}
    height={height}
    width={width}
    halfWidth={halfWidth}
    alignStart={alignStart}
    justifyCenter={justifyCenter}
    justifySpaceBetween={justifySpaceBetween}
    justifyEnd={justifyEnd}
    justifySpaceAround={justifySpaceAround}
    justifySpaceEvenly={justifySpaceEvenly}
    alignCenter={alignCenter}
    alignEnd={alignEnd}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginSides={marginSides}
    padding={padding}
    paddingSides={paddingSides}
    justifyStart={justifyStart}
    fullWidth={fullWidth}
    wrap={wrap}
    overflowHidden={overflowHidden}
    onClick={onClick || null}
    input={input}
    animation={animation}
    duration={duration}
    marginLeft={marginLeft}
  >
    {children}
  </Container>
)

export default WrapperFlex
