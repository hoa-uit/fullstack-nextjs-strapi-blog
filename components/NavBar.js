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
          <div className="posts-button">
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </div>
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

      {/* 
      
      
      hamberger button
      */}

      <input id="hamburger" className="hamburger" type="checkbox" />
      <label className="hamburger" htmlFor="hamburger">
        <i></i>
        <text>
          <close>close</close>
          <open>menu</open>
        </text>
      </label>
      <section className="drawer-list">
        <ul>
          <li>
            <Link href="/posts">
              <a>All posts</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Write now</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Find</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Light mode</a>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;
