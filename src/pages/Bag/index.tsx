import { Tabs, TabsProps } from 'antd'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Sacola`,
    children: `Content of Sacola`
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
