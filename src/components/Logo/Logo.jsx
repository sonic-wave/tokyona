import React from "react";
import "./Logo.css";
import logoImg from "../../assets/images/icons/japan_flag.svg"

const Logo = () => {
  return (
    <a className="logo__link" href="/">
      <img className="logo__img" src={logoImg} alt="logo" />
      <div className="logo__text">Tokyona</div>
    </a>
  );
};

export default Logo;
