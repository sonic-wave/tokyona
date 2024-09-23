import React from "react";
import "./Social.css";
import instagramIcon from "../../assets/images/icons/instagram.svg";
import telegramIcon from "../../assets/images/icons/telegram.svg";

const Social = () => {
  return (
    <div className="social">
      <a
        className="social__link"
        href="https://www.instagram.com/tokyona_tours"
        target="_blank"
      >
        <img className="social__img" src={instagramIcon} alt="instagram" />
      </a>
      <a className="social__link" href="https://t.me/mintF" target="_blank">
        <img className="social__img" src={telegramIcon} alt="telegram" />
      </a>
    </div>
  );
};

export default Social;
