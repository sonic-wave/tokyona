import React from "react";
import Header from "../../components/Header/Header";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

const IndividualTourPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h3 className="individual__title">Individual Tour</h3>
        <p className="individual__description">
          Feel free to write all of your wishes and we can discuss via
          email/telegram/instagram to create unique journey through the Japan
          together.
        </p>
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default IndividualTourPage;
