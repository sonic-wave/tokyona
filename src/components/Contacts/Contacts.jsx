import React from "react";
import "./Contacts.css";
import Social from "../Social/Social";
import ContactForm from "../ContactForm/ContactForm";
import Mail from "../Mail/Mail";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts__id">
      <h3 className="contacts__title">Contact us</h3>
      <Mail />
      <Social />
      <ContactForm />
    </section>
  );
};

export default Contacts;
