import { PropsWithChildren, ReactNode } from 'react'
import useCart from '../../hooks/useCart'
import Spinner from '../Spinner'
import MonetaryValue from '../MonetaryValue'

function SummaryRow({ children }: PropsWithChildren) {
  return <div className="flex justify-between mb-2">{children}</div>
}

export default function Summary({ renderAction }: { renderAction: () => ReactNode }) {
  const { data, isLoading, isError } = useCart()

  return (
    <section className="w-full shadow-md bg-white px-5 py-7 fixed bottom-0">
      {isLoading && <Spinner />}
      {!isLoading && (isError || !data) && (
        <div className="text-sm">Não foi possível carregar as informações do carrinho.</div>
      )}
      {!isLoading && !isError && data && (
        <div className="text-sm">
          <SummaryRow>
            <span>Produtos: ({data.items.length} itens)</span>
            <MonetaryValue value={data.subTotal} />
          </SummaryRow>
          <SummaryRow>
            <span>Frete:</span>
            <MonetaryValue value={data.shippingTotal} />
          </SummaryRow>
          <SummaryRow>
            <span>Desconto:</span>
            <MonetaryValue className="text-fuschia font-bold" value={data.discount} />
          </SummaryRow>
          <SummaryRow>
            <span className="font-bold text-base">Subtotal</span>
            <MonetaryValue className="font-bold text-base" value={data.total} />
          </SummaryRow>
        </div>
      )}
      <div className="mt-7">{renderAction()}</div>
    </section>
  )
}
