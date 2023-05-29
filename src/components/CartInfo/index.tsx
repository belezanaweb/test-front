import { Button, Card, Col, Row, Skeleton, Typography } from "antd"

import { ReactNode } from "react"
import { moneyFormatter } from "../../utils/money"
import useCart from "../../hooks/useCart"

const { Text } = Typography;
export function CartInfoRoot({ children }: { children: ReactNode }) {
  return (
    <Card className="h-fit gap-6 border-transparent md:mx-2 md:my-10 md:min-w-[320px] md:border-neutral-500">
      {children}
    </Card>
  )
}

// INFO DATA

export function CartInfo(props: any) {
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

    </Card>
    </>
  )
}


