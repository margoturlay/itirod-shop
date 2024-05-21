import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { ThemeContext } from './context/ThemeContexts';
import { FaRegMoon } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';
import { ProductConsumer } from '../context';

class Navbar extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 768,
      menuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth <= 768 });
  };

  handleMenu = () => {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    const { theme, toggleTheme } = this.context;
    const { isMobile, menuOpen } = this.state;

    return (
      <div>
        {isMobile ? (
          <MobileNavWrapper className={`navbar navbar-expand-sm ${theme ? 'bg-dark' : 'bg-light'} px-sm-5`}>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="store" />
            </Link>
            <div className="menu-icon" onClick={this.handleMenu}>
              <AiOutlineMenu className="text-white" />
            </div>
            {menuOpen && (
              <div className="resmenu">
                <NavLink to="/" className="nav-link" activeClassName="active-link">
                  Products
                </NavLink>
                <ProductConsumer>
                  {value => (
                    <li className="nav-item">
                      <input
                        className="search-input"
                        placeholder="Search for products"
                        onChange={e => value.filterProducts(e.target.value)}
                      />
                    </li>
                  )}
                </ProductConsumer>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme ? (
                    <span>
                      Dark Mode <FaRegMoon />
                    </span>
                  ) : (
                    <span>
                      Light Mode <GoSun />
                    </span>
                  )}
                </button>
                <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                    <i className="fas fa-cart-plus">my cart</i>
                  </ButtonContainer>
                </Link>
              </div>
            )}
          </MobileNavWrapper>
        ) : (
          <DesktopNavWrapper className={`navbar navbar-expand-sm ${theme ? 'bg-dark' : 'bg-light'} px-sm-5`}>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="store" />
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                <NavLink to="/" className="nav-link" activeClassName="active-link">
                  Products
                </NavLink>
              </li>
              <ProductConsumer>
                {value => (
                  <li className="nav-item ml-5">
                    <input
                      className="search-input"
                      placeholder="Search for products"
                      onChange={e => value.filterProducts(e.target.value)}
                    />
                  </li>
                )}
              </ProductConsumer>
            </ul>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <i className="fas fa-cart-plus">my cart</i>
              </ButtonContainer>
            </Link>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme ? <FaRegMoon /> : <GoSun />}
            </button>
          </DesktopNavWrapper>
        )}
      </div>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    &.active-link {
      color: var(--mainBlue) !important;
    }
  }
  .search-input {
    border: none;
    padding: 5px;
    border-radius: 5px;
    outline: none;
  }
  .theme-toggle {
    background: transparent;
    border: none;
    color: var(--mainWhite);
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
  }
`;

const MobileNavWrapper = styled(NavWrapper)`
  .menu-icon {
    font-size: 2rem;
    cursor: pointer;
  }
  .resmenu {
    display: flex;
    flex-direction: column;
    background: var(--mainDark);
    padding: 10px;
    .nav-link {
      margin: 10px 0;
    }
    .search-input {
      margin: 10px 0;
    }
    .theme-toggle {
      margin: 10px 0;
    }
  }
`;

const DesktopNavWrapper = styled(NavWrapper)`
  .theme-toggle {
    margin-left: 20px;
  }
`;

export default Navbar;
