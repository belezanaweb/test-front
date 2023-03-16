import { FC, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { ICart } from "./Cart.interface";
import './styles.scss'

const Cart: FC<ICart> = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart">
      {cartItems?.items?.map((item, index) => {
        return (
          <div className="cart__item" key={index}>
            <div className="cart__item__image">
              <img src={item.product.imageObjects[0].thumbnail} />
            </div>
            <div className="cart__item__description">
              <p>{item.product.name}</p>
            </div>
            <div className="cart__item__price">
              {item.product.priceSpecification.discount !== 0 && <span className="cart__item__price-old">{item.product.priceSpecification.maxPrice}</span>}
              <span className="cart__item__price-current">{item.product.priceSpecification.price}</span>
            </div>
          </div>
        )
      })}

      <div></div>
      <div></div>
    </div>
  )
}

export default Cart;
