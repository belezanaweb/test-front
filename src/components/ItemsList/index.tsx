import React from 'react';
import { CartItem } from '../../interfaces/Cart';
import formatCurrency from '../../helpers/formatCurrency';

import {
  Container,
  ItemTitle,
  ProductListContent,
  UpdateItemControl,
  DeleteItemControl
} from './styles';
import { MdAddCircleOutline, MdDelete, MdRemoveCircleOutline } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';
import EmptyMessage from '../../components/EmptyMessage';

interface ItemsListProps {
  showControlers: boolean;
}

export default function ItemsList({ showControlers }: ItemsListProps) {
  const { removeProduct, updateItemQuantity, cartItems } = useCart();

  function handleProductIncrement(item: CartItem) {
    updateItemQuantity({
      productSku: item.product.sku,
      quantity: item.quantity + 1
    });
  }

  function handleProductDecrement(item: CartItem) {
    updateItemQuantity({
      productSku: item.product.sku,
      quantity: item.quantity - 1
    });
  }

  function handleRemoveProduct(productSku: string) {
    removeProduct(productSku);
  }

  return (
    <Container>
      {cartItems?.length > 0 ? (
        <>
          <h2>Produtos</h2>
          <ProductListContent>
            {cartItems?.map((item: CartItem) => (
              <li key={item.product.sku}>
                <img src={item.product.imageObjects[0].small} />

                <ItemTitle>
                  {item.product.name}
                  <span>
                    {formatCurrency(item.product.priceSpecification.price * item.quantity)}
                  </span>
                </ItemTitle>

                {showControlers && (
                  <>
                    <UpdateItemControl>
                      <button
                        type="button"
                        data-testid="decrement-product"
                        disabled={item.quantity <= 1}
                        onClick={() => handleProductDecrement(item)}
                      >
                        <MdRemoveCircleOutline size={20} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        data-testid="increment-product"
                        onClick={() => handleProductIncrement(item)}
                      >
                        <MdAddCircleOutline size={20} />
                      </button>
                    </UpdateItemControl>

                    <DeleteItemControl>
                      <button
                        type="button"
                        data-testid="remove-product"
                        onClick={() => handleRemoveProduct(item.product.sku)}
                      >
                        <MdDelete size={20} />
                      </button>
                    </DeleteItemControl>
                  </>
                )}
              </li>
            ))}
          </ProductListContent>
        </>
      ) : (
        <EmptyMessage />
      )}
    </Container>
  );
}
