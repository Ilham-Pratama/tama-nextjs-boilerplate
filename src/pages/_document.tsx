import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <script src="https://extension-files.twitch.tv/helper/v1/twitch-ext.min.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
