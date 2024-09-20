import React from "react";
import "./Logo.css";
import logoImg from "../../assets/images/icons/japan_flag.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo__link">
      <img className="logo__img" src={logoImg} alt="logo" />
      <div className="logo__text">Tokyona</div>
    </Link>
  );
};

export default Logo;
