import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useDataContext } from './context/dataContext'
import { Bag } from './pages/Bag'

export default function App() {
  const { data, tabActive } = useDataContext()

  return (
    <div className="p-4">
      <Header>
        <Bag data={data} />
      </Header>
      <Footer data={data} buttonTitle={tabActive} />
    </div>
  )
}
