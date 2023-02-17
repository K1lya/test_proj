import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation("about");
  return (
    <div>
      {t("О Сайте")}
      {t("WE")}
    </div>
  );
};

export default AboutPage;
