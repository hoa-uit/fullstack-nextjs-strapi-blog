// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className="wrap-footer">
        <div className="left-footer">
          <p className="name-owner">
            Markintosh blog{' '}
            <FontAwesomeIcon className="icon-crown" icon={faCrown} />
          </p>
          <p className="thanks-text">Thanks for reading</p>
          <p className="lisence">
            © 2022-present Markintosh. All Rights Reserved.
          </p>
        </div>
        <div className="right-footer">
          <p className="contact">Contact</p>
          <div className="social">
            <Link href="https://www.facebook.com/h2ndnt">
              <a>Facebook</a>
            </Link>
            <Link href="https://www.instagram.com/h2ndnt/">
              <a>Instagram</a>
            </Link>
            <Link href="https://twitter.com/h2ndnt">
              <a>Twitter</a>
            </Link>
            <Link href="https://github.com/hoa-uit">
              <a>Github</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
