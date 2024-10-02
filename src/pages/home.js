import React from 'react';
import { useTranslation } from "react-i18next";
import CardsHome from '../components/cardsHome';
import CarouselProtect from '../components/carouselProtect';


const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>{t("home.welcome")}</h1> 
      <CardsHome/>
      <CarouselProtect/>
    </div>
  );
};

export default Home;
