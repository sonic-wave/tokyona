import React, { useState } from "react";
import burgerIcon from "../../assets/images/icons/burger_menu.svg";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const BurgerMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <>
      <div className="burger__container">
        <button className="burger__button" onClick={handleMenuToggle}></button>
      </div>
      {isMenuActive && (
        <div className="burger__menuContainer">
          <div className="overlay" onClick={handleMenuToggle}></div>
          <div className="burger__menu">
            <div className="menu__titleContainer">
              <h3 className="menu__title">Menu</h3>
              <button
                className="menu__closeButton"
                onClick={handleMenuToggle}
              ></button>
            </div>
            {/* <a className="menu__logo" href="/">
              <img
                className="menu__logoImg"
                src="/src/assets/images/logo-gray.svg"
                alt="лого"
              />
            </a> */}
            <div className="burger__links">
              <Link className="burger__link" to={"/"}>
                Home
              </Link>
              <a
                className="burger__link"
                href="#contacts__id"
                onClick={handleMenuToggle}
              >
                Contacts
              </a>
              <Link className="burger__link" to={"/excursions"}>
                Excursions
              </Link>
              <Link className="burger__link" to={"/tours"}>
                Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
