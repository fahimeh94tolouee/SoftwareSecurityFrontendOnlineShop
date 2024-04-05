import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
            <Head>
              <link rel="stylesheet" href="/static/fonts/fonts.css"></link>
              <link href="https://diegoddox.github.io/react-redux-toastr/7.1/react-redux-toastr.min.css"
                    rel="stylesheet" type="text/css"/>
              {this.props.styleTags}
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}