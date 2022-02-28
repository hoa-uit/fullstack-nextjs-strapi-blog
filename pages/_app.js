import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/common.scss';
import '../components/NavBar.scss';
import '../styles/footer.scss';
import '../styles/index.scss';
import '../styles/post.scss';

import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container-app">
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
