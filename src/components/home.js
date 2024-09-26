import React from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("home.welcome")}</h1> 
    </div>
  );
};

export default Home;
