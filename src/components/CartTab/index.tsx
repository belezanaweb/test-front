import { Card, Col, Row, Space } from 'antd'

import useCart from '../../hooks/useCart'

export function CartTab() {
  const { data, isLoading } = useCart()
  console.log(data)
  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card>
          <div>Cart component</div>
        </Card>
      </Col>
      <Space size={4} />
    </Row>
  )
}

export default CartTab
