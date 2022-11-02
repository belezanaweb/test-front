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
      <section>CARTÃO DE CRÉDITO</section>
      <form>
        <label>
          Número do cartão
          <input
            id="numero"
            name="numero"
            placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _ "
          ></input>
        </label>
        <label>
          Nome do Titular
          <input id="nome" name="nome" placeholder="Como no cartão"></input>
        </label>
        <label>
          Validade (mês/ano)
          <input id="data" name="data" placeholder="_ _ / _ _ _ _"></input>
        </label>
        <label>
          CVV:
          <input id="numero" name="numero" placeholder="_ _ _"></input>
        </label>
      </form>
      <p>PRODUTOS</p>
      <Total />
      <button onClick={goToConfirmation}>FINALIZAR O PEDIDO</button>
    </div>
  )
}
