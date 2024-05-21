import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = storeProducts.map(item => ({ ...item }));
    this.setState({ products }, this.checkCartItems);
  };

  getItem = id => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(
      prevState => ({
        products: tempProducts,
        cart: [...prevState.cart, product],
        detailProduct: { ...product },
      }),
      this.addTotals
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    selectedProduct.count++;
    selectedProduct.total = selectedProduct.count * selectedProduct.price;

    this.setState({ cart: tempCart }, this.addTotals);
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    selectedProduct.count--;

    if (selectedProduct.count === 0) {
      this.removeItem(id);
    } else {
      selectedProduct.total = selectedProduct.count * selectedProduct.price;
      this.setState({ cart: tempCart }, this.addTotals);
    }
  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => item.id !== id);

    this.setState({ cart: tempCart, products: tempProducts }, this.addTotals);
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.setProducts();
      this.addTotals();
    });
  };

  getTotals = () => {
    let subTotal = this.state.cart.reduce((sum, item) => sum + item.total, 0);
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    const total = subTotal + tax;
    return { subTotal, tax, total };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };

  filterProducts = value => {
    value = value.toLowerCase();
    let products = storeProducts.filter(item =>
      item.title.toLowerCase().includes(value) || item.info.toLowerCase().includes(value)
    );
    this.setState({ products }, this.checkCartItems);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          filterProducts: this.filterProducts,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
