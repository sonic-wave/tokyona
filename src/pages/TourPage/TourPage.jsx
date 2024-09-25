import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tour from "../../components/Tour/Tour";
import Contacts from "../../components/Contacts/Contacts";

const TourPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Tour />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default TourPage;
