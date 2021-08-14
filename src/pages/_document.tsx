import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;600&family=Saira+Condensed:wght@100;500&display=swap" rel="stylesheet"/> */}
          <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}