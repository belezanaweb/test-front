import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { UserProvider } from "@belezanaweb/store";

const App = ({ Component, ...pageProps }) => {
  return (
    <>
      <UserProvider>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          />
        </Head>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
};

export default App;
