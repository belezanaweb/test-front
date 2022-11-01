import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import Total from '../Components/Total'

export default function Payment() {
  const navigate = useNavigate()
  const goToConfirmation = () => {
    navigate('/confirmation')
  }
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        CARTÃO DE CRÉDITO
        <form></form>
      </section>
      <Total />
      <button onClick={goToConfirmation}>FINALIZAR O PEDIDO</button>
    </div>
  )
}
