import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};
