import React from 'react';
import logo from '../../logo.svg';
import { useHistory } from "react-router-dom";
import { Container } from './styles';

function SplashScreen() {
  const history = useHistory();
  setTimeout(() => {
    history.push("/cart")
  }, 3000);
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  )
}
export default SplashScreen