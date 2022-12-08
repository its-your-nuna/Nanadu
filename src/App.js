import React, { useEffect } from 'react';
import dotenv from 'dotenv';
import { ThemeProvider, createMuiTheme } from '@mui/styles';
import { useDispatch } from 'react-redux';
import './App.css';

import theme from './theme';
import ScrollToTop from './components/reusables/ScrollToTop';
import Navbar from './components/reusables/Navbar';
import Footer from './components/reusables/Footer';
import { getAllMeals } from './store/actions/productActions';
import useOnline from './hooks/useOnline.js';
import './App.css'
import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const online = useOnline();
  useEffect(() => {
    dotenv.config();
    (async function () {
      await dispatch(getAllMeals());
    })();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar style={{
        background:'white'
      }} />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
