import {
  Button,
  Card,
  Loading,
  ProductItem,
  Summary,
  Template,
  Typography,
} from "components";
import { useCart } from "hooks/Cart";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "./styles";
import { CartProps } from "./types";

const Cart: React.FC<CartProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { cart } = useCart();

  useEffect(() => {
    if (cart) setLoading(false);
  }, [cart]);

  return (
    <Template>
      <div>
        <Typography as="h2" bold gutterBottom>
          PRODUTOS
        </Typography>
        <Card>
          <ProductsList>
            {loading ? (
              <Loading />
            ) : (
              <>
                {cart?.items.map((product) => (
                  <ProductItem
                    key={product.sku}
                    data={{
                      image: product.image.medium,
                      description: product.title,
                      price: product.price,
                    }}
                  />
                ))}
              </>
            )}
          </ProductsList>
        </Card>
      </div>

      {!loading && <Summary {...cart} />}

      <Button
        data-testid="button-cart"
        disabled={loading}
        as={Link}
        to="/payment"
      >
        SERGUIR PARA O PAGAMENTO
      </Button>
    </Template>
  );
};

export default Cart;
