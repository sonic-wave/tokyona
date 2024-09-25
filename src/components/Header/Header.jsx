import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <Social />
        <Nav />
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
