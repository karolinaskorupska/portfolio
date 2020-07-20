import React from "react";
import classNames from 'classnames/bind';

import { Link } from "react-scroll";
import menu from "./menu.scss";

let style = classNames.bind(menu);


const Navigation = ({ hamburgerIsOpen}) => {
    let className = style({
        base:true,
        'menu active': hamburgerIsOpen,
        'menu ': !hamburgerIsOpen
    })
  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="/" title="home" smooth={"true"} offset={0} duration={500}>
            home
          </a>
        </li>
        <li>
          <Link
            to="/"
            title="about-me"
            smooth={"true"}
            offset={0}
            duration={500}
          >
            about me
          </Link>
        </li>
        <li>
          <Link
            to="/"
            title="my-works"
            smooth={"true"}
            offset={0}
            duration={800}
          >
            my works
          </Link>
        </li>
        <li>
          <Link
            to="/"
            title="contact"
            smooth={"true"}
            offset={0}
            duration={1000}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
