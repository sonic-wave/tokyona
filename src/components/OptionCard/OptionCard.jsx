import React from "react";
import "./OptionCard.css";
import { useNavigate } from "react-router-dom";

const OptionCard = ({ img, title, description, link }) => {
  const navigate = useNavigate();

  const handleOptionCardClick = () => {
    navigate(link);
  };

  return (
    <article className="card" onClick={handleOptionCardClick}>
      <img className="card__img" src={img} alt="option_image" />
      <div className="card__info">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default OptionCard;
