import React from "react";
import Achievements from "../Achievements/Achievements";
import BreadCrumb from "../common/BreadCrumb";
import ContactForm from "../common/ContactForm";

const AchievementPage = () => {
  return (
    <div>
      <BreadCrumb name="Home" pageName="Our achievements" icon=">>" />
      <Achievements />
      <ContactForm />
    </div>
  );
};

export default AchievementPage;
