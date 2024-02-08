import Document, { Head, Html, Main, NextScript } from "next/document";
import { links } from "@volvo-cars/css/links";
import { FavIcons } from '@volvo-cars/favicons/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        
        <Head>
          {links().map((link) => (
            <link key={link.href} {...link} />
          ))}
          <FavIcons />

        </Head>
        <body className="volvo_0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}