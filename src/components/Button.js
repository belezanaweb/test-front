import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  background-color: var(--color-orange-2);
  border: solid 1px var(--color-orange-2);
  border-radius: 5px;
  box-shadow: var(--box-shadow-bottom-2);

  &:active {
    transform: translateY(2px);
  }

  &:hover {
    cursor: pointer;
    background-color: var(--color-orange-3);
    border-bottom: solid 1px var(--color-orange-3);
  }
`

const Button = (
  props
) => (
  <StyledButton {...props}
    onClick={props.onClickHandler}
  >
    {props.title}
  </StyledButton>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func
}

Button.defaultProps = {
  title: 'Button'
}

export default Button;
