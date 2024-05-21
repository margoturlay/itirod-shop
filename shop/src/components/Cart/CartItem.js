import React from 'react';
import { ThemeConsumer } from '../context/ThemeContexts';

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className="row my-2 text-capitalize text-center">
          <div className="col-10 mx-auto col-lg-2">
            <img
              src={img}
              style={{ width: '5rem', height: '5rem' }}
              className="img-fluid"
              alt="product"
            />
          </div>
          <div className={`col-10 mx-auto col-lg-2 ${theme ? 'text-light' : ''}`}>
            <span className={`d-lg-none ${theme ? 'text-light' : ''}`}>product: </span>
            {title}
          </div>
          <div className={`col-10 mx-auto col-lg-2 ${theme ? 'text-light' : ''}`}>
            <span className={`d-lg-none ${theme ? 'text-light' : ''}`}>price: </span>
            {price}
          </div>
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
              <div>
                <span
                  className={`btn ${theme ? 'btn-light' : 'btn-black'} mx-1`}
                  onClick={() => decrement(id)}
                >
                  -
                </span>
                <span className={`btn ${theme ? 'btn-light' : 'btn-black'} mx-1`}>{count}</span>
                <span
                  className={`btn ${theme ? 'btn-light' : 'btn-black'} mx-1`}
                  onClick={() => increment(id)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div className={`col-10 mx-auto col-lg-2 ${theme ? 'text-light' : ''}`}>
            <div className="cart-icon" onClick={() => removeItem(id)}>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <div className={`col-10 mx-auto col-lg-2 ${theme ? 'text-light' : ''}`}>
            <strong>item total: $ {total}</strong>
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
};

export default CartItem;
