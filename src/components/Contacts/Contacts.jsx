import React from "react";
import "./Contacts.css";
import Social from "../Social/Social";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts__id">
      <h3 className="contacts__title">Contact me</h3>
      <a className="contacts__link" href="mailto:mintfrau@gmail.com">
      mintfrau@gmail.com
      </a>
      <Social />
    </section>
  );
};

export default Contacts;
