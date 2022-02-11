import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart, MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { ProductList, Header, CartInfo } from './styles';
import api from '../../services/api';
import formatCurrency from '../../helpers/formatCurrency';
import { useCart } from '../../hooks/useCart';
import { Cart, CartItem, Product } from '../../interfaces/Cart';

interface CartItemFormatted extends CartItem {
  priceFormatted: string;
}

interface CartItemsQuantity {
  [key: string]: number;
}

const Home = (): JSX.Element => {
  const [items, setItems] = useState<CartItemFormatted[]>([]);
  const {
    // addProduct,
    cart
  } = useCart();

  const itemsQuantity = cart.items.length;

  const cartItemsQuantity = cart.items.reduce((itemsQuantity, item) => {
    const itemsQuantityObj = { ...itemsQuantity };

    itemsQuantityObj[item.product.sku] = item.quantity;

    return itemsQuantityObj;
  }, {} as CartItemsQuantity);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Cart>('5b15c4923100004a006f3c07');

      const data = response.data.items.map((item: CartItem) => ({
        ...item,
        priceFormatted: formatCurrency(item.product.priceSpecification.price)
      }));

      setItems(data);
    }

    loadProducts();
  }, []);

  // function handleAddProduct(sku: string) {
  //   addProduct(sku);
  // }

  return (
    <>
      <Header>
        <Link to="/">{/* <img src={logo} alt="Rocketshoes" /> */}</Link>

        <CartInfo to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
              {itemsQuantity === 1 ? `${itemsQuantity} item` : `${itemsQuantity} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </CartInfo>
      </Header>

      <ProductList>
        {items.map((item: CartItemFormatted) => (
          <li key={item.product.sku}>
            <img src={item.product.imageObjects[0].medium} alt={item.product.name} />
            <strong>{item.product.name}</strong>
            <span>{item.priceFormatted}</span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={
                () => {
                  return;
                }

                //  handleAddProduct(item.product.sku)
              }
            >
              <div data-testid="cart-product-quantity">
                <MdAddShoppingCart size={16} color="#FFF" />
                {cartItemsQuantity[item.product.sku] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
};

export default Home;
