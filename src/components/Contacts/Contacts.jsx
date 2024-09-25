import React from "react";
import "./Contacts.css";
import Social from "../Social/Social";
import ContactForm from "../ContactForm/ContactForm";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts__id">
      <h3 className="contacts__title">Contact us</h3>
      <a className="contacts__link" href="mailto:Tokyona.tours@gmail.com">
        Tokyona.tours@gmail.com
      </a>
      <Social />
      <ContactForm />
    </section>
  );
};

export default Contacts;
