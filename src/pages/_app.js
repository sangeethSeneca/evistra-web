import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
        <CssBaseline />
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </CacheProvider>
  );
}

export default MyApp;

