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
          <meta name="og:title" content="HallooGPT" />
          <meta
            name="og:description"
            content="Generate your next halloo in seconds."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@vulture990" />
          <meta name="twitter:creator" content="@vulture990" />
          <meta name="twitter:title" content="HallooGPT" />
          <meta
            name="twitter:description"
            content="Generate your next halloo in seconds."
          />
          <meta
            name="twitter:image"
            content="https://halloo-gpt.vercel.app/og.png"
          />
          <meta
            name="og:image"
            content="https://halloo-gpt.vercel.app/og.png"
          />
          <meta name="og:image:width" content="1200" />
          <meta name="og:image:height" content="630" />
          <meta name="og:url" content="https://halloo-gpt.vercel.app/" />
          <meta name="og:site_name" content="HallooGPT" />
          <meta name="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
