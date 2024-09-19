import React from "react";
import "./OptionCard.css";

const OptionCard = ({ img, title, description }) => {
  return (
    <article className="card">
      <img className="card__img" src={img} alt="option_image" />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__paragraph">{description}</p>
      </div>
    </article>
  );
};

export default OptionCard;
