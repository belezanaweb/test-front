import { Col, Form, FormInstance, Input, Row } from 'antd'

type PaymentTabTypes = {
  handleFinalizar: (tab: string) => void,
  form: FormInstance
}
const PaymentTab: React.FC<PaymentTabTypes> = ({ handleFinalizar, form }) => {
  const onFinish = () => {
    handleFinalizar('3')
  }

  return (
    <Form form={form} id="payment-form" onFinish={onFinish} layout="vertical">
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="cardNumber"
            label="Número do Cartão"
            rules={[
              {
                required: true,
                message: 'Por favor, insira o número do cartão!'
              }
            ]}
          >
            <Input maxLength={16} placeholder="Número do Cartão" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            name="cardName"
            label="Nome"
            rules={[
              {
                required: true,
                message: 'Por favor, insira o nome!'
              }
            ]}
          >
            <Input placeholder="Nome impresso no cartão" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="expiryDate"
            label="Data de Validade"
            rules={[
              {
                required: true,
                message: 'Por favor, insira a data de validade!'
              }
            ]}
          >
            <Input maxLength={5} placeholder="MM/AA" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="cvv"
            label="Código CVV"
            rules={[
              {
                required: true,
                message: 'Por favor, insira o código CVV!'
              }
            ]}
          >
            <Input maxLength={3} placeholder="CVV" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default PaymentTab
