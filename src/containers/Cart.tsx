import * as React from 'react';
import { Connection, Inject } from 'exredux';
import { modelStore } from '../service/modelStore';
import { ProductListModel } from '../service/models/ProductListModel';
import { Title } from '../components/Title';
import { CartProducts } from '../components/CartProducts';
import { CartSummary } from '../components/CartSummary';
import { Button } from '../components/Button';
import { Wrapper } from '../components/Wrapper';
import { Link } from 'react-router-dom';
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
class Props {
  @Inject productList?: ProductListModel;
}

@Connection({
  modelStore,
  props: Props
})
export class Cart extends React.Component<Props> {
  componentDidMount() {
    const { productList } = this.props;
    productList.getProducts();
  }

  render() {
    const { productList } = this.props;

    if (productList.isFailed) {
      return <div>Falha ao listar produtos!</div>;
    }

    if (productList.isLoading) {
      return <div>Carregando produtos...</div>;
    }

    if (productList.isCompleted) {
      const products = productList.response.data;
      return (
        <Wrapper>
          <Title>Produtos</Title>
          <CartProducts items={products.items} />
          <CartSummary
            discount={products.discount}
            shippingTotal={products.shippingTotal}
            subTotal={products.subTotal}
            total={products.total}
          />
          <Link to="payment">
            <Button>Seguir para o pagamento</Button>
          </Link>
        </Wrapper>
      );
    }

    return null;
  }
}
