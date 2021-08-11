import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';
import { NextComponentType } from 'next';
import { ReactElement } from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export type NextComponentWithLayout = NextComponentType & {
  getLayout?: any;
};

type CustomAppProps = AppProps & { Component: NextComponentWithLayout };

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
