import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';
import Script from 'next/script';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={'en'}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script src='https://scripts.simpleanalyticscdn.com/latest.js' />
          <noscript>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src='https://queue.simpleanalyticscdn.com/noscript.gif'
              alt=''
              referrerPolicy='no-referrer-when-downgrade'
            />
          </noscript>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
