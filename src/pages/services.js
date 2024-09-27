import React from 'react';
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("services.welcome")}</h1> 
    </div>
  );
};

export default Services;
