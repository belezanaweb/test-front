import styled from 'styled-components'

/* formulário do cartão de crédito */

/* verificar os itens de baixo (tamanho) */
export const PaymentCard = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 10px;
  height: 279px;
  width: 335px;
`

/* divisão dos últimos itens do formulário */
export const GridForm = styled.div`
  display: grid;
  input:nth-last-of-type(-n + 2) {
    width: 140px;
  }
  gap: 10px;
  grid-template-columns: 2fr 1.96fr;
`
