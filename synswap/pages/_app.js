import React, { Component } from 'react';
import App, { Container } from 'next/app';
import { Provider} from 'react-redux';
import { createStore } from "redux";
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers/index';
import  { makeStore } from '../store';


class MyApp extends App {
    static async getInitialProps({ Component, ctx, req, res }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        );
    }
}


export default withRedux(makeStore)(MyApp);
