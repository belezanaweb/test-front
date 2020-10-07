import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const StyledBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 12px 12px 0 13px;
  margin: 10px 10px 19px 9px;
`

const StyledBoxTitle = styled.h2`
  color: #999;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-transform: uppercase;
  margin-left: 20px;
  margin-bottom: -7px;
`

function Box({ title, children }) {
  return (
    <>
      <StyledBoxTitle>{title}</StyledBoxTitle>
      <StyledBox>{children}</StyledBox>
    </>
  )
}

Box.propTypes = {
  title: PropTypes.string
}

export default Box
