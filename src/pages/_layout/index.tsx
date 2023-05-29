import { Layout, Space } from 'antd'

const { Header, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#2b2b2b',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff'
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff'
}

type Props = {
  children: React.ReactNode
}
const DefaultLayout: React.FC<Props> = ({ children }) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Content style={contentStyle}>{children}</Content>
    </Layout>
  </Space>
)
export default DefaultLayout
