import React from 'react';
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("certifications.welcome")}</h1> 
    </div>
  );
};

export default Certifications;