import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from './styles';
// import SvgArrowBack from '../../assets/SvgArrowBack';
// import SvgLogo from '../../assets/SvgLogo';

// import { cleanLocalStorage } from '../../helpers/local-storage';
// import { cleanUserStates } from '../../store/modules/user/actions';
// import { cleanReposStates } from '../../store/modules/repos/actions';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBack() {
    // cleanLocalStorage();
    // dispatch(cleanUserStates());
    // dispatch(cleanReposStates());

    navigate('/', { replace: true });
  }

  return (
    <Container>
      <nav>
        <Link to="/cart">Cart</Link> | <Link to="/payment">Payment</Link> |{' '}
        <Link to="/confirmation">Confirmation</Link>
      </nav>
    </Container>
  );
}
