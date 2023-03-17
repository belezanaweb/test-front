import { FC, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import formatCurrency from "../../utils/converters/formatCurrency";
import useWindowSize from "../../utils/hooks/useWindowSize";
import OrderSummary from "../OrderSummary";
import { ICart } from "./Cart.interface";
import './styles.scss'

const Cart: FC<ICart> = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const currentPath = useLocation();
  const handleClick = () => {
    navigate("/payment")
  }
  const { width } = useWindowSize();

  const isCartEnds = currentPath.pathname === "/confirmation"

  const responsiveImage = (width: number) => {
    switch (true) {
      case width < 480:
        return "thumbnail"
      case width < 768:
        return "small"
      case width > 768:
        return "medium"
      default:
        return "thumbnail"
    }
  }

  return (
    <div className="container">
      <div className="cart">
           {isCartEnds &&
          <h2>Produtos</h2>
        }
        {cartItems?.items?.map((item, index) => {
          return (
            <div className="cart__item" key={index}>
              <div className="cart__item__image">
                <img src={item.product.imageObjects[0][responsiveImage(width)]} />
              </div>
              <div className="cart__item__description">
                <p>{item.product.name}</p>
              </div>
              {!isCartEnds &&
                <div className="cart__item__price">
                  {item.product.priceSpecification.discount !== 0 && <span className="cart__item__price-old">{formatCurrency(item.product.priceSpecification.maxPrice)}</span>}
                  <span className="cart__item__price-current">{formatCurrency(item.product.priceSpecification.price)}</span>
                </div>
              }
            </div>
          )
        })}
      </div>
      {!isCartEnds && <OrderSummary text="Seguir para o pagamento" onClick={handleClick} />}

    </div>
  )
}

export default Cart;
