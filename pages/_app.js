import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/common.scss';
import '../components/NavBar.scss';
import '../styles/footer.scss';
import '../styles/index.scss';
import '../styles/post.scss';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <title>markintosh</title>
      </Head>
      <div className="container-app">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
