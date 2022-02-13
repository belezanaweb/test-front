import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';

import { ProductList, Button, StockCounter } from './styles';
import api from '../../services/api';

import { useCart } from '../../hooks/useCart';
import { Cart, CartItem } from '../../interfaces/Cart';
import Header from './components/Header';
import Loading from '../../components/Loading';
import formatCurrency from '../../helpers/formatCurrency';
import cartMapper from '../../mappers/cart-mapper';
import { setToLocalStorage } from '../../helpers/local-storage';
import { BELEZA_NA_WEB_ALL_ITEMS } from '../../constants/local-storage';
import { useLocation } from 'react-router';

interface CartItemsQuantity {
  [key: string]: number;
}

export default function Home() {
  const { cartItems, stockquantity, setSumInfo, sumInfo, addProduct, isPurchaseConfirm } =
    useCart();
  const [allProducts, setAllProducts] = useState<CartItem[]>([] as CartItem[]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Cart>('5b15c4923100004a006f3c07');

      const cartWrapper = cartMapper(response.data);
      const { items, shippingTotal } = cartWrapper;

      setAllProducts(items);
      setSumInfo({ ...sumInfo, shippingTotal });
      setToLocalStorage(BELEZA_NA_WEB_ALL_ITEMS, items);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (isPurchaseConfirm) {
      window.location.reload();
    }
  }, [isPurchaseConfirm]);

  const cartItemsQuantity = cartItems.reduce((itemsQuantity, item) => {
    const itemsQuantityObj = { ...itemsQuantity };
    itemsQuantityObj[item.product.sku] = item.quantity;
    return itemsQuantityObj;
  }, {} as CartItemsQuantity);

  return (
    <>
      <Header />
      <ProductList>
        {allProducts.map((item: CartItem) => (
          <li key={item.product.sku}>
            <img src={item.product.imageObjects[0].medium} alt={item.product.name} />
            <p>{item.product.name}</p>
            <span>{formatCurrency(item.product.priceSpecification.price)}</span>

            <Button onClick={() => addProduct(item.product.sku)} data-testid="add-item-button">
              <div className="quantity" data-testid="cart-item-quantity">
                <MdShoppingBasket size={20} color="#fff" />
                {cartItemsQuantity[item.product.sku] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </Button>

            <StockCounter>
              Restam {stockquantity - (cartItemsQuantity[item.product.sku] || 0)} no estoque
            </StockCounter>
          </li>
        ))}
      </ProductList>

      {allProducts?.length === 0 && <Loading />}
    </>
  );
}
