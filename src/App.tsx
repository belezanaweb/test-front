import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useDataContext } from './context/dataContext'
import { Bag, Payment, Confirmation } from './pages'

export default function App() {
  const { data, tabActive } = useDataContext()

  const getContentComponent = () => {
    switch (tabActive) {
      case 'bag':
        return <Bag data={data} />
      case 'payment':
        return <Payment />
      case 'confirmation':
        return <Confirmation data={data} />
      default:
        return null
    }
  }

  return (
    <div className="p-4">
      <Header>{getContentComponent()}</Header>
      <Footer data={data} buttonTitle={tabActive} />
    </div>
  )
}
