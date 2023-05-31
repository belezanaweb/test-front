import { Card, Col, FormInstance, Row, Space, Typography } from 'antd'

import CartTab from '../CartTab'
import { cardHide } from '../../utils/card'

type ConfirmationTabTypes = {
  form: FormInstance
}
const { Title, Text } = Typography
const ConfirmationTab: React.FC<ConfirmationTabTypes> = ({ form }) => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card style={{ textAlign: 'center' }}>
            <Space direction="vertical">
              <Title level={3}>Compra efetuada com sucesso</Title>
              <Text>*********{cardHide(form.getFieldValue('cardNumber'))}</Text>
              <Text>{form.getFieldValue('cardName')}</Text>
              <Text>{form.getFieldValue('expiryDate')}</Text>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <Title level={4}>Produtos</Title>
          <CartTab />
        </Col>
      </Row>
    </>
  )
}

export default ConfirmationTab
