import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { ThemeConsumer } from './context/ThemeContexts';

class Details extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <ProductConsumer>
            {({ detailProduct, addToCart, openModal }) => {
              const { id, company, img, info, price, title, inCart } = detailProduct;
              const themeClasses = theme ? "bg-slate-900 text-light" : "text-dark";

              return (
                <div className={`container py-5 ${themeClasses}`}>
                  {/* Title */}
                  <div className="row">
                    <div className={`col-10 mx-auto text-center text-slanted my-5 ${theme ? "text-primary" : "text-blue"}`}>
                      <h1>{title}</h1>
                    </div>
                  </div>
                  {/* End of Title */}

                  <div className="row">
                    {/* Product Image */}
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={img} className="img-fluid" alt="product" />
                    </div>
                    {/* Product Info */}
                    <div className={`col-10 mx-auto col-md-6 my-3 ${themeClasses}`}>
                      <h2>Model: {title}</h2>
                      <h4 className={`text-title text-uppercase mt-3 mb-2 ${theme ? "text-white" : "text-muted"}`}>
                        Made by: <span className="text-uppercase">{company}</span>
                      </h4>
                      <h4 className={theme ? "text-primary" : "text-blue"}>
                        <strong>
                          Price: <span>$</span>{price}
                        </strong>
                      </h4>
                      <p className={`text-capitalize font-weight-bold mt-3 mb-0 ${theme ? "text-info" : ""}`}>
                        Some info about the product
                      </p>
                      <p className={`lead ${theme ? "text-light" : "text-muted"}`}>{info}</p>
                      {/* Buttons */}
                      <div>
                        <Link to="/">
                          <ButtonContainer>Back to Products</ButtonContainer>
                        </Link>
                        <ButtonContainer
                          cart
                          disabled={inCart}
                          onClick={() => {
                            addToCart(id);
                            openModal(id);
                          }}
                        >
                          {inCart ? "In Cart" : "Add to Cart"}
                        </ButtonContainer>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </ProductConsumer>
        )}
      </ThemeConsumer>
    );
  }
}

export default Details;
