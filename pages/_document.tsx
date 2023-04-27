import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next halloo in seconds."
          />
          <meta name="og:title" content="Halloo" />
          <meta
            name="og:description"
            content="Generate your next halloo in seconds."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@metastash" />
          <meta name="twitter:creator" content="@metastash" />
          <meta name="twitter:title" content="Halloo" />
          <meta
            name="twitter:description"
            content="Generate your next halloo in seconds."
          />
          <meta
            name="twitter:image"
            content="https://halloo.dev/vercelLogo.png"
          />
          <meta name="og:image" content="https://halloo.dev/vercelLogo.png" />
          <meta name="og:image:width" content="1200" />
          <meta name="og:image:height" content="630" />
          <meta name="og:url" content="https://halloo.dev/" />
          <meta name="og:site_name" content="Halloo" />
          <meta name="og:type" content="website" />
        </Head>
        <body className="body-bg-img">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
