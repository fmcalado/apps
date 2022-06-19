import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/calado.png" />
      </Head>
      <body className="h-full w-full min-h-screen flex justify-center">
        <div className="p-4 md:p-8 w-full h-full max-w-screen-xl flex flex-col">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

export default Document;
