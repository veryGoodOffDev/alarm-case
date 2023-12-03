import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import './shared/styles/global.css';
import { AppRouter } from './components/AppRouter/AppRouter';
function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
