import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from './context/ThemeContexts';

class Modal extends Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <ProductConsumer>
            {(value) => {
              const { modalOpen, closeModal, modalProduct } = value;
              const { img, title, price } = modalProduct;

              if (!modalOpen) {
                return null;
              }

              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className={`col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5 ${
                          theme ? 'bg-dark text-white' : ''
                        }`}
                      >
                        <h5 className="modal-title">Item Added to the Cart</h5>
                        <img src={img} className="img-fluid mb-3" alt="product" />
                        <h5 className="product-title">{title}</h5>
                        <h5 className={theme ? 'text-light' : 'text-muted'}>Price: ${price}</h5>
                        <Link to="/">
                          <ButtonContainer onClick={() => closeModal()}>
                            Continue Shopping
                          </ButtonContainer>
                        </Link>
                        <Link to="/cart">
                          <ButtonContainer cart onClick={() => closeModal()}>
                            Go to Cart
                          </ButtonContainer>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }}
          </ProductConsumer>
        )}
      </ThemeConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
    border-radius: 10px;
    padding: 20px;
    &.bg-dark {
      background: var(--mainDark);
    }
  }

  .modal-title {
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .product-title {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  img {
    border-radius: 10px;
  }
`;

export default Modal;
