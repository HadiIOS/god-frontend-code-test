import { Block, Logo, StyleProvider, ThemePicker, View } from "vcc-ui";
import "../public/css/styles.css";
import type { AppProps } from "next/app";

import React, { StrictMode } from "react";
import reportAccessibility from "../src/util/reportAccessibility";
import { RendererProvider } from 'react-fela';
import { createRenderer } from 'fela';

function App({ Component, pageProps }: AppProps) {
  const renderer = createRenderer()
  return (
    <>
      <StyleProvider>
        <ThemePicker variant="light">
          <StrictMode>
            <RendererProvider renderer={renderer}>
            <Block
              extend={{
                padding: 20,
              }}
            >
              <div role="banner">
                <View padding={6}>
                  <Logo height={32} />
                </View>
              </div>
              <div role="main">
                <Component {...pageProps} />
              </div>
            </Block>
            </RendererProvider>
          </StrictMode>
        </ThemePicker>
      </StyleProvider>
    </>
  );
}

reportAccessibility(React);
export default App;
