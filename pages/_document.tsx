import Document, { Head, Html, Main, NextScript } from "next/document";
import { FavIcons } from "@volvo-cars/favicons/react";
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
            <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
