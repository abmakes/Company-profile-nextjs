import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@800&family=Poppins:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
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