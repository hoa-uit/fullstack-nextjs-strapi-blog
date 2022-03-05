import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <title>Markintosh</title>
          <meta charset="UTF-8"></meta>
          <meta
            name="description"
            content="Markintosh's blog là một blog nơi mình chia sẻ những kiến thức và tâm sự cá nhân, rảnh rỗi thì có thể dịch bài "
          ></meta>
          <meta
            name="keywords"
            content="Markintosh, blog, Markintosh blog, markintosh vercel app, blog của markintosh"
          ></meta>
          <meta name="author" content="Markintosh"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
