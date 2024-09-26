import React from 'react';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("global");
  

  return (
    <div>
      <h1>{t("projects.welcome")}</h1> 
    </div>
  );
};

export default Projects;
