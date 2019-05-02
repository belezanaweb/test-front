import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardProduct from '../components/CardProduct';
import CardResume from '../components/CardResume';

import { Main, Aside, Container } from './styles';
import {
  Result,
  ContentSuccess,
  IconSuccess,
  TextResult,
  PaymentCard,
} from './success-styles';

class Success extends Component {
  render() {
    return (
      <div>
        <Header page="success" />

        <Result>
          <IconSuccess>
            <svg version="1.1" x="0px" y="0px" width="25px" height="14px" viewBox="0 0 41 30">
              <image id="image0" width="41" height="30" x="0" y="0" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeBAMAAABDMSrQAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEUAAAD/eAD/eAD/eAD/
              eAD/eAD/eAD/eAD/eAD///95P5k4AAAACHRSTlMAIL+An0Bg38QIot8AAAABYktHRAnx2aXsAAAA
              B3RJTUUH4wUCExUkKzubmwAAAK1JREFUKM+NkaESwjAQRI+2ZCoZBoFEIisrwUUiEEgGFYmMhBJg
              P5sMk9CkWUFUsnN7924jUp5lR0TBjYgVVTUOpdjgRUp7kGEKD1J6wq4UZxhIaUuxtlj8j3UuxZpi
              mYh1TCxzuHCziafF9dd/3MViHDDE4Bo8E5iIqBMshRBdjnUJL5MHq7H/elwqeuvbN1xjM93e9wBy
              UZRFV+E+3X8Fx/67Bwu2BvtvMRnWBzWELZ5V3kOYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA1
              LTAyVDE5OjIxOjM2KzAzOjAwP+YRgAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNS0wMlQxOToy
              MTozNiswMzowME67qTwAAAAASUVORK5CYII=" />
            </svg>
          </IconSuccess>
          <TextResult>Compra efetuada com sucesso</TextResult>
        </Result>

        <Container>
          <ContentSuccess>
            <Card title="PAGAMENTO">
              <PaymentCard>
                <p>{this.props.user.wallet.creditCard.number}</p>
                <p>{this.props.user.wallet.creditCard.name}</p>
                <p>{this.props.user.wallet.creditCard.valid}</p>
              </PaymentCard>
            </Card>

            <Card title="PRODUTOS">
              <div>
                {this.props.products.map(product => (
                  <CardProduct
                    thin={true}
                    key={product.product.sku}
                    product={product.product}
                  />
                ))}
              </div>
            </Card>
          </ContentSuccess>

          <Aside>
            <CardResume resume={this.props.resume} />
          </Aside>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Success);

function mapStateToProps(state) {
  return {
    user: state.user,
    resume: state.bag.resume,
    products: state.bag.products
  }
}
