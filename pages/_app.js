import "babel-polyfill";
import React from "react";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import ReduxToastr from 'react-redux-toastr'
import initStore from "../store";
import { Provider } from "react-redux";
import { getInitial, setUserAgent } from "../actions/initial";
import { getInfo } from "../actions/user";
import { BaseCSS } from "styled-bootstrap-grid";
import { GridThemeProvider } from "styled-bootstrap-grid";
import GlobalStyle from "../styled_components/globalStyle";
import MainLayout from "../layouts/mainLayout";
import Auth from "../layouts/auth";
import Shipping from "../layouts/shipping";
import Profile from "../layouts/profile";
import { getToken } from "../utilities/tokenManager";
import {ACCESS_TOKEN} from "../constants/storageKey";
import {LOGIN, PROFILE, REGISTER, VERIFY} from "../constants/urls";
const gridTheme = {
  col: {
    padding: 8 // default 15
  }
};
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    if (ctx.isServer) {
      await ctx.store.dispatch(getInitial());
      await ctx.store.dispatch(setUserAgent(ctx.req.useragent));
    }
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps, pathName: ctx.pathname };
  }
  componentDidMount() {
    const { store } = this.props;
    if (getToken(ACCESS_TOKEN)) {
      store.dispatch(getInfo());
      // store.dispatch(getInformation(true));
    }
  }

  layoutRender() {
    const { Component, pageProps, pathName } = this.props;

    if (
      pathName === LOGIN ||
      pathName === REGISTER ||
      pathName === "/forget" ||
      pathName === VERIFY ||
      pathName === "/resetverify" ||
      pathName === "/resetpassword"
    ) {
      return (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      );
    } else if (pathName === "/shipping") {
      return (
        <Shipping>
          <Component {...pageProps} />
        </Shipping>
      );
    } else {
      if (pathName.indexOf(PROFILE) === 0) {
        return (
          <MainLayout>
            <Profile path={pathName}>
              <Component {...pageProps} />
            </Profile>
          </MainLayout>
        );
      } else {
        return (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        );
      }
    }
  }

  render() {
    const { store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <GridThemeProvider gridTheme={gridTheme}>
            <React.Fragment>
              <BaseCSS />
              <GlobalStyle />
              {this.layoutRender()}
              <ReduxToastr
                timeOut={4000}
                newestOnTop={true}
                preventDuplicates
                position="bottom-left"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                // progressBar
                closeOnToastrClick
              />
            </React.Fragment>
          </GridThemeProvider>
        </Provider>
      </Container>
    );
  }
}
export default withRedux(initStore)(MyApp);
