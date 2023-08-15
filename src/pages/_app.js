"use client";
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { persistor, store } from "../../store";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isDisabled = ["/admin-dashboard", "client-portal"].includes(
    router.pathname
  );


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={cache}>
          <CssBaseline />
          {!isDisabled && <Header />}
          <Component {...pageProps} />
          <ToastContainer />
          {!isDisabled && <Footer />}
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
