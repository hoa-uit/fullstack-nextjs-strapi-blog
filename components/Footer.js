// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faSearch, faCrown, faAnchor } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="wrap-footer">
        <div className="left-footer">
          <p className="name-owner">
            Markintosh <FontAwesomeIcon className="icon-crown" icon={faCrown} />
          </p>
          <p className="thanks-text">Thanks for reading</p>
          <p className="lisence">
            © 2022-present Markintosh. All Rights Reserved.
          </p>
        </div>
        <div className="right-footer">
          <p className="contact">Contact</p>
          <div className="social">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twiter</a>
            <a href="/">Github</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
