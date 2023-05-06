import { Card } from '../card'
import { CartProductItem } from '../cart-product-item'

export function ConfirmationTab() {
  return (
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col items-center gap-2 px-5 py-5">
        <h1 className="text-[1.375rem]">Compra efetuada com sucesso</h1>
        <p className="text-neutral-800">****.****.****.4545</p>
        <p className="text-neutral-800">Bruce Wayne</p>
        <p className="text-neutral-800">02/2027</p>
      </Card>
      <Card className="px-5 py-5">
        <h2 className="text-xl">Produtos</h2>
        {Array.from({ length: 3 }).map((_, i) => (
          <CartProductItem.Root key={i}>
            <CartProductItem.Info
              description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução"
              imgSrc="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
            />
          </CartProductItem.Root>
        ))}
      </Card>
    </div>
  )
}
