import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const isDisabled = ["/admin-dashboard", "client-portal"].includes(
    router.pathname
  );

  return (
    <CacheProvider value={cache}>
      <CssBaseline />
      {!isDisabled && <Header />}
      <Component {...pageProps} />
      <Footer />
    </CacheProvider>
  );
}

export default MyApp;
