import React from 'react'
import CartItem from '../CartItem/CartItem';

const CartItemList = () => {
  const items = [
    {
      "product": {
        "sku": "24410",
        "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
        "imageObjects": [
          {
            "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
            "valid": true
          }
        ],
        "priceSpecification": {
          "price": 225.9,
        }
      }
    },
    {
      "product": {
        "sku": "38273",
        "name": "Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml",
        "imageObjects": [
          {
            "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg",
            "valid": true
          }
        ],
        "priceSpecification": {
          "price": 299,
        }
      }
    },
    {
      "product": {
        "sku": "3019",
        "name": "Senscience Inner Restore Intensif - Máscara Capilar 50ml",
        "imageObjects": [
          {
            "thumbnail": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png",
            "valid": true
          }
        ],
        "priceSpecification": {
          "price": 99.9,
        }
      }
    }
  ]

  return (
    <div>
      {items.map(item =>
        <CartItem
          key={item.product.sku}
          name={item.product.name}
          thumb={item.product.imageObjects[0].thumbnail}
          price={item.product.priceSpecification.price}
        />
      )}
    </div>
  )
}

export default CartItemList
