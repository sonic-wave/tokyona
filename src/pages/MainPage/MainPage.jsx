import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Options from "../../components/Options/Options";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header />
      <About />
      <Options />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
