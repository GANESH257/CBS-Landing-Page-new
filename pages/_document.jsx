import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Chesterfield Bariatric Surgery specializes in weight loss procedures including gastric sleeve and gastric bypass surgery. Serving St. Louis and surrounding areas in Missouri." />
          <meta name="keywords" content="Chesterfield Bariatric Surgery, weight loss surgery, bariatric surgery, gastric sleeve, gastric bypass, St. Louis weight loss, obesity treatment, Dr. Deepu Sudhakaran" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
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