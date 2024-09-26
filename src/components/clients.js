import React from 'react';
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("clients.welcome")}</h1> 
    </div>
  );
};

export default Clients;
