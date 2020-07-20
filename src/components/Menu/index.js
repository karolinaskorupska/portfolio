import React, { Component } from "react";

import Navigation from "../Navigation";
import HamburgerMenu from "../HamburgerMenu";

class Menu extends Component {
  state = {
    hamburgerIsOpen: false
  };

  handleHamburgerMenu = () => {
    this.setState({
      hamburgerIsOpen: !this.state.hamburgerIsOpen,
    });
  };

  handleHamburgerMenuClose = () => {
    this.setState({
      hamburgerIsOpen: false,
    });
    
  };

  render() {
    return (
      <>
        <Navigation
          hamburgerIsOpen={this.state.hamburgerIsOpen}
          
        />
        <HamburgerMenu
            hamburgerIsOpen={this.state.hamburgerIsOpen}
            handleHamburgerMenu={this.handleHamburgerMenu}
        />
      </>
    );
  }
}

export default Menu;
