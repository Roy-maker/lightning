import React from 'react';
import { useTranslation } from "react-i18next";
import CardsHome from '../components/cardsHome'

const Home = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("home.welcome")}</h1> 
      <CardsHome/>
    </div>
  );
};

export default Home;
