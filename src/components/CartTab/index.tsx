import * as Styled from './styled'

import { Card, Col, Row, Space, Typography } from 'antd'

import { moneyFormatter } from '../../utils/money'
import useCart from '../../hooks/useCart'

const { Text } = Typography

export function CartTab() {
  const { data, isLoading } = useCart()

  console.log(data)

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Card>
          <div>
            {data?.items?.map((d, i) => {
              return (
                <Row key={i}>
                  <Col span={16} className="pull-left">
                    <img src={d.product.imageObjects[0].thumbnail} alt="Foto do produto" />
                    <Text>{d.product.name}</Text>
                  </Col>
                  <Col span={8} className="pull-right">
                    <Row>
                      <Col span={24} className="pull-right">
                        {d.product.priceSpecification.maxPrice !==
                          d.product.priceSpecification.originalPrice && (
                          <Text delete disabled>
                            {moneyFormatter.format(d.product.priceSpecification.maxPrice)}
                          </Text>
                        )}
                      </Col>
                      <Col span={24} className="pull-right">
                        <Text strong>
                          {moneyFormatter.format(
                            d.product.priceSpecification.maxPrice -
                              d.product.priceSpecification.discount
                          )}
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              )
            })}
          </div>
        </Card>
      </Col>

      <Space size={4} />
      <Row>
        <Col></Col>
      </Row>
    </Row>
  )
}

export default CartTab
