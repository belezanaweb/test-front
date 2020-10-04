import React, { useEffect } from 'react';
import { Container } from './styles';

function Header(props) {
  useEffect(() => {
  }, []);

  return (
    <Container onClick={props.buttonAction}>
      <h1>{props.text}</h1>
    </Container>
  );
}
export default Header;