import React from 'react'

function ConfirmPage() {
  const infoUser = JSON.parse(window.localStorage.getItem('infoUser'))
  const infoCart = JSON.parse(window.localStorage.getItem('infoCart'))
  const total = infoCart.subTotal + infoCart.shippingTotal - infoCart.discount

  const listProductsCart = infoCart.items.map((item) => (
    <div>
      {item.product.imageObjects.map((image) => (
        <img src={image.small} alt="product"></img>
      ))}
      {item.product.name}
    </div>
  ))

  return (
    <div>
      <div>Pagamento</div>
      <div>
        <p>{infoUser.number}</p>
        <p>{infoUser.user}</p>
        <p>{infoUser.cardValidate}</p>
      </div>
      <div>Produtos</div>
      <div>{listProductsCart}</div>
      <hr></hr>
      <div>
        <p>Produtos: {infoCart.subTotal.toFixed(2)}</p>
        <p>Frete: {infoCart.shippingTotal.toFixed(2)}</p>
        <p>Desconto: {infoCart.discount.toFixed(2)}</p>
        <p>Total: {total.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ConfirmPage
