import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from './context';
import { ThemeProvider } from './components/context/ThemeContexts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </ProductProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
