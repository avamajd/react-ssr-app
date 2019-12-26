import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../src/styles/index.scss";
import CssBaseline from "@material-ui/core/CssBaseline";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist"

const theme = createMuiTheme({
  direction: "rtl"
});

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const _App = withRedux(store)(
  class _App extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, store } = this.props;

      const persistor = persistStore(store);

      return (
        <div className="container">
          <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                  <Component {...pageProps} />
                </PersistGate>
              </Provider>
            </ThemeProvider>
          </StylesProvider>
        </div>
      );
    }
  }
);
export default _App;
