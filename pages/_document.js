import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <meta http-equiv="Content-Security-Policy" content="script-src 'none'" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <style jsx global>{`
            #__next {
              width: 100%;
            }
          `}</style>
      </body>
    </Html>
  )
}