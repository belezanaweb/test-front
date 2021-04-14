import { useHistory } from 'react-router'

const Header = (props) => {
  const history = useHistory()

  return (
    <div>
      {history.location.pathname === '/cart' ? (
        <p onClick={() => goToCart(history)}>SACOLA</p>
      ) : (
        <p onClick={() => goToCart(history)}>SACOLA</p>
      )}

      {history.location.pathname === '/payment' ? (
        <p onClick={() => goToPayment(history)}>PAGAMENTO</p>
      ) : (
        <p onClick={() => goToPayment(history)}>PAGAMENTO</p>
      )}

      {history.location.pathname === '/confirmation' ? (
        <p onClick={() => goToConfirmation(history)}>CONFIRMAÇÃO</p>
      ) : (
        <p onClick={() => goToConfirmation(history)}>CONFIRMAÇÃO</p>
      )}
    </div>
  )
}

export default Header
