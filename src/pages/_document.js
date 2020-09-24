import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <title>Factual Physique | Online Coach</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Ireland's best online fitness, weight loss transformation coach."/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="theme-color" content="#ffffff" />
            {/*<meta name="google-site-verification" content="PxFGbIq4nULrj4lR_q4vmhpiXYLMKPfSUkQf-HJTTA0" />*/}
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument