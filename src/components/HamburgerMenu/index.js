import React from "react";
import classNames from 'classnames/bind';
import hamburgerMenuStyleFile from"../HamburgerMenu/hamburgerMenu.scss";

let hamburgerMenuStyle = classNames.bind(hamburgerMenuStyleFile);


const HamburgerMenu =({handleHamburgerMenu, hamburgerIsOpen }) => {
  let classNameHamburgerMenu = hamburgerMenuStyle({
    base:true,
    'menu_item_meatballs ': !hamburgerIsOpen,
    'menu_item_meatballs active': hamburgerIsOpen
  });

  return (
    <button onClick={handleHamburgerMenu} className="HamburgerMenu">
      <div className="menu_wrapper">
        <div className={classNameHamburgerMenu}>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </button>
  );
}


export default HamburgerMenu;


