import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import { ThemeConsumer } from './context/ThemeContexts';

const ProductList = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ProductConsumer>
          {({ products }) => (
            products.length > 0 ? (
              <div className={theme ? 'py-5 bg-slate-900' : 'py-5 bg-slate-200'}>
                <div className="container">
                  <Title name="our" title="products" />
                  <div className="row">
                    {products.map(product => (
                      <Product key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={theme ? 'py-5 bg-slate-900' : 'py-5 bg-slate-200'}>
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-primary">
                      <p style={{ color: 'red' }}>Sorry, no results found!</p>
                    </div>
                    <div className="col-10 mx-auto text-center text-title text-primary">
                      <p style={{ color: 'black' }}>Please check the spelling or try searching for something else</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </ProductConsumer>
      )}
    </ThemeConsumer>
  );
};

export default ProductList;
