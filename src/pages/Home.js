import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/page-home/hero/Hero";
import LoadingSpinner from "../components/page-home/loading-spinner/LoadingSpinner";
import Localisation from "../components/page-home/Localisation";
import Process from "../components/page-home/process/Process";
import Restaurants from "../components/page-home/restaurants/Restaurants";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <LoadingSpinner />
        <Localisation city="Paris, Belleville"/>
        <Hero />
        <Process />
        <Restaurants />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
