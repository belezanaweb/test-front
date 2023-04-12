import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Summary } from '../../components/Summary'
import { Heading } from '../../components/Typography/styles'
import { useData } from '../../services/hooks/useData'
import { formatCardNum } from '../../utils/format'

export function Payment() {
  const { data, isLoading } = useData()

  return (
    <>
      <Card>
        <Heading fontWeight={400}>Cartão de crédito</Heading>
        <form>
          <div>
            <Input
              name="card-number"
              label="Número"
              onChange={(value) => {
                let formatted = formatCardNum(value)
                return formatted
              }}
              placeholder="0000 0000 0000 0000"
              maxlength={16}
            />
          </div>
          <div>
            <Input
              name="name"
              label="Nome do titular do cartão"
              placeholder="Nome impresso no cartão"
              error={{ message: 'Error message' }}
              onChange={() => {}}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              name="date-validate"
              label="Data de validade"
              placeholder="MM/AA"
              error={{ message: 'Error message' }}
              onChange={() => {}}
              maxlength={5}
            />
            <Input
              name="cvv"
              label="Código CVV:"
              placeholder="000"
              error={{ message: 'Error message' }}
              onChange={() => {}}
              maxlength={3}
            />
          </div>
        </form>
      </Card>
      {data && !isLoading && (
        <Summary summary={data.summary}>
          <Button variant="primary" onClick={() => {}} aria-label="Submit form">
            Finalizar pedido
          </Button>
        </Summary>
      )}
    </>
  )
}
