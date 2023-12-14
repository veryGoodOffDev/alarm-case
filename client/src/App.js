import React, { useContext, useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom';
import './shared/styles/global.css';
import { AppRouter } from './components/AppRouter/AppRouter';
import axios from 'axios';
import { Context } from '.';
function App() {

  const {user} = useContext(Context)

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
