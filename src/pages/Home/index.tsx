import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';

import { ProductList, Button, StockCounter } from './styles';

import setCartItemsQuantity from '../../helpers/set-items-quantity';

import { useCart } from '../../hooks/useCart';
import { CartItem } from '../../interfaces/Cart';
import Header from './components/Header';
import Loading from '../../components/Loading';
import formatCurrency from '../../helpers/formatCurrency';

export default function Home() {
  const { allProducts, addProduct, cartItems, stockquantity } = useCart();

  return (
    <>
      <Header />
      <ProductList>
        {allProducts?.map((item: CartItem) => (
          <li key={item.product.sku}>
            <img src={item.product.imageObjects[0].medium} alt={item.product.name} />
            <p>{item.product.name}</p>
            <span>{formatCurrency(item.product.priceSpecification.price)}</span>

            <Button onClick={() => addProduct(item.product.sku)}>
              <div className="quantity">
                <MdShoppingBasket size={20} color="#fff" />
                {setCartItemsQuantity(cartItems, item.product.sku) || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </Button>

            <StockCounter>
              Restam {stockquantity - (setCartItemsQuantity(cartItems, item.product.sku) || 0)} no
              estoque
            </StockCounter>
          </li>
        ))}
      </ProductList>

      {allProducts?.length === 0 && <Loading />}
    </>
  );
}
