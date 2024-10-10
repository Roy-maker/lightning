import React from 'react';
import { useTranslation } from "react-i18next";
import CardsHome from '../components/cardsHome';
import CarouselProt from '../components/CarouselProt';


const Home = () => {
  const { t } = useTranslation("global");

  return (
    <div>
      <h1>{t("home.welcome")}</h1> 
      <CardsHome/>
      <h1>Protección Efectiva</h1>
      <CarouselProt/>
    </div>
  );
};

export default Home;
