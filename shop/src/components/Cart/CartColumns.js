import React from 'react';
import { ThemeConsumer } from '../context/ThemeContexts';

const CartColumns = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="container-fluid text-center d-none d-lg-block">
          <div className="row">
            {['products', 'name of product', 'price', 'quantity', 'remove', 'total'].map((header, index) => (
              <div key={index} className="col-10 mx-auto col-lg-2">
                <p className={`text-uppercase ${theme ? 'text-light' : ''}`}>{header}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default CartColumns;
