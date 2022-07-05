/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="dark">
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(){var a=document.body.classList;a.remove("dark");var e=localStorage.getItem("theme");e?a.add(e.replace(/"/g,"")):window.matchMedia("(prefers-color-scheme: dark)").matches?a.add("dark"):a.add("light")}()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
