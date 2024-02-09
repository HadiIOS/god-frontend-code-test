import Document, { Head, Html, Main, NextScript } from "next/document";
import { FavIcons } from "@volvo-cars/favicons/react";
import { RendererProvider } from "react-fela";
import { createRenderer } from 'fela';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="format-detection"
            content="telephone=no, date=no, email=no, address=no"
          />
          <FavIcons />
        </Head>
        <body>
          <RendererProvider renderer={createRenderer()}>
            <Main />
          </RendererProvider>
          <NextScript />
        </body>
      </Html>
    );
  }
}
