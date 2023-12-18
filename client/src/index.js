import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ProductsStore from './store/ProductsStore';
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      products: new ProductsStore(),
    }}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);
