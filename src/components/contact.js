import React from 'react';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("contact.welcome")}</h1> 
    </div>
  );
};

export default Contact;
