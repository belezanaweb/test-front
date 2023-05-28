import { Tabs, TabsProps } from 'antd'

import CartTab from '../../components/CartTab'

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
  return <Tabs defaultActiveKey="1" centered items={items} />
}
export default Bag
