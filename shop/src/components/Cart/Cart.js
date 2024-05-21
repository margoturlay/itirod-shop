import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from "./CartTotals";

class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {({ cart }) => (
            cart.length > 0 ? (
              <div className="h-full">
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={cart} />
                <CartTotals value={cart} history={this.props.history} />
              </div>
            ) : (
              <div className="h-full">
                <EmptyCart />
              </div>
            )
          )}
        </ProductConsumer>
      </section>
    );
  }
}

export default Store;
