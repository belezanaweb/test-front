import { Card, Form, Tabs, TabsProps } from 'antd'

import { CartInfo } from '../../components/CartInfo'
import CartTab from '../../components/CartTab'
import ConfirmationTab from '../../components/ConfirmationTab'
import PaymentTab from '../../components/PaymentTab'
import { useState } from 'react'

const Bag: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [form] = Form.useForm()
  const handleActiveTab = (key: string) => {
    setActiveTab(key)
  }
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Sacola`,
      children: <CartTab />
    },
    {
      key: '2',
      label: `Pagamento`,
      children: <PaymentTab handleFinalizar={handleActiveTab} form={form} />
    },
    {
      key: '3',
      label: `Confirmação`,
      children: (
        <>
          <ConfirmationTab form={form} />
        </>
      )
    }
  ]

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        activeKey={activeTab}
        onChange={handleActiveTab}
        centered
        items={items}
      />
      <CartInfo activeTab={activeTab} handleSeguirPagamento={handleActiveTab} form={form} />
    </>
  )
}
export default Bag
