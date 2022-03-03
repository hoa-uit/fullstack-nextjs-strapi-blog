import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
// import the icons you need
import {
  faSearch,
  faCrown,
  faSun,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

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
        <div className="effect-underline all-post-nav">
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </div>
        <div className="effect-underline pc">
          <Link href="/">
            <a>Write </a>
          </Link>
        </div>
      </div>

      <div className="right-navbar">
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search"
          />
          <button className="searchButton" href="#">
            <FontAwesomeIcon className="" icon={faSearch} />
          </button>
        </div>
        <Link href="/">
          <a>
            <FontAwesomeIcon className="icon-sun" icon={faSun} />
          </a>
        </Link>
      </div>
      <div className="bars">
        <FontAwesomeIcon className="icon-bars" icon={faBars} />
      </div>
    </nav>
  );
}

export default NavBar;
