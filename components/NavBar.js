import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faSearch, faCrown, faSun } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navBar">
      <div className="left-navbar">
        <Link href="/" className="wrap-logo">
          <a className="logo rainbow-text">
            Markintosh
            <FontAwesomeIcon className="icon-crown-nav" icon={faCrown} />{' '}
          </a>
          {/* <FontAwesomeIcon className="icon-crown" icon={faCrown} /> */}
        </Link>
        <ul>
          <li>
            <Link href="/posts">
              <a class="effect-underline">All posts</a>
            </Link>
          </li>
        </ul>
        <Link href="/">
          <a class="effect-underline">Write now</a>
        </Link>
      </div>

      <div className="right-navbar">
        <div class="searchBox">
          <input class="searchInput" type="text" name="" placeholder="Search" />
          <button class="searchButton" href="#">
            <FontAwesomeIcon className="" icon={faSearch} />
          </button>
        </div>
        <Link href="/">
          <a>
            <FontAwesomeIcon className="icon-sun" icon={faSun} />
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
