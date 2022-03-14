import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* for material ui */}
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}