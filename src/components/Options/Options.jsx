import React from "react";
import "./Options.css";
import classic_tour from "../../assets/images/classic_tour.jpg";
import group_tour from "../../assets/images/group_tour.jpg";
import individual_tour from "../../assets/images/individual_tour.jpg";
import OptionCard from "../OptionCard/OptionCard";

const OPTIONS_INFO = [
  {
    img: classic_tour,
    title: "Classic Tour",
    description:
      "The best option if you are first in Japan and want to dive in with all must-see places",
    link: "/tours",
  },
  {
    img: group_tour,
    title: "Excursions",
    description: "If you want to visit specific place and learn it's history",
  },
  {
    img: individual_tour,
    title: "Individual Tour",
    description:
      "Individual tour that is created based on your wishes and preferences",
  },
];

const Options = () => {
  return (
    <section className="options" id="about__id">
      <h3 className="options__title">Tour Options</h3>
      <div className="options__container">
        {OPTIONS_INFO.map((item, index) => (
          <OptionCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Options;
