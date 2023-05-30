import { Button, Card, Col, Row, Skeleton, Typography } from "antd"

import { ReactNode } from "react"
import { moneyFormatter } from "../../utils/money"
import useCart from "../../hooks/useCart"

const { Text } = Typography;

type CardInfoType = {
  activeTab: string,
  handleSeguirPagamento: (tab: string) => void
}


const buttonLabelTab: Record<string, string> = {
  "1": 'Seguir para pagamento',
  "2": 'Finalizar pedido',

};

export const CartInfo: React.FC<CardInfoType> = ({activeTab, handleSeguirPagamento}) => {
  const { data, isLoading } = useCart()

  if (isLoading) {
    return (
      <div>
       Loading...
      </div>
    )
  }

  const quantity = data?.items.reduce((acc, curr) => acc + curr.quantity, 0)


  return (
    <>
    <Card>
    <Row gutter={[16,16]}>
      <Col span={12}>
        <Text>Produtos: ({quantity} itens)</Text>
      </Col>
      <Col span={12} className="pull-right">
        <span>{moneyFormatter.format(data!.total)}</span>
      </Col>
    </Row>
    <Row gutter={[16,16]}>
      <Col span={12}>
        <Text>Frete</Text>
      </Col>
      <Col span={12} className="pull-right">
        <span>{moneyFormatter.format(data!.shippingTotal)}</span>
      </Col>
    </Row>
    <Row gutter={[16,16]}>
      <Col span={12}>
        <Text>Desconto</Text>
      </Col>
      <Col span={12} className="pull-right">
        <Text strong style={{color: '#9254de'}}>{moneyFormatter.format(data!.discount)}</Text>
      </Col>
    </Row>
    <Row gutter={[16,16]}>
      <Col span={12}>
        <Text strong>Subtotal</Text>
      </Col>
      <Col span={12} className="pull-right">
        <Text strong >{moneyFormatter.format(data!.subTotal)}</Text>
      </Col>
    </Row>
    <Row gutter={[16,16]}>
      <Col></Col>
      <Col span={24}  >
        <Button  block onClick={() => handleSeguirPagamento("2")} size="large" style={{backgroundColor: '#9222DC', color: '#fff'}} >
          <Text strong style={{color: '#fff'}} >{buttonLabelTab[activeTab]}</Text>
        </Button>
      </Col>
    </Row>
    </Card>
    </>
  )
}


