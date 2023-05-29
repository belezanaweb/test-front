import { Tabs, TabsProps } from 'antd'

import { CartInfo } from '../../components/CartInfo'
import CartTab from '../../components/CartTab'
import { useState } from 'react'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Sacola`,
    children: <CartTab />
  },
  {
    key: '2',
    label: `Pagamento`,
    children: `Content of Pagamento`
  },
  {
    key: '3',
    label: `Confirmação`,
    children: `Content of Confirmação`
  }
]
const Bag: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1')

  const handleActiveTab = (key: string) => {
    setActiveTab(key)
  }
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={handleActiveTab} centered items={items} />
      <CartInfo activeTab={activeTab} />
    </>
  )
}
export default Bag
