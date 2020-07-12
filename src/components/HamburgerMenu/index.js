import React, { Component } from "react";
import "../HamburgerMenu/hamburgerMenu.scss";

class HamburgerMenu extends Component {
  render() {
    return (
      <div className="HamburgerMenu">
        <div className="menu_wrapper">
          <div className="menu_item_meatballs">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
