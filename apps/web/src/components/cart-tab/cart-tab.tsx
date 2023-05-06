import { Card } from '../card'
import { CartProductItem } from '../cart-product-item'

export function CartTab() {
  return (
    <Card className="gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <CartProductItem.Root key={i}>
          <CartProductItem.Info
            description="L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução"
            imgSrc="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
          />
          <CartProductItem.Price price={225.9} maxPrice={243.9} />
        </CartProductItem.Root>
      ))}
    </Card>
  )
}
