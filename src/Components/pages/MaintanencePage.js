import React from "react";
import Maintanence from "../Maintanence/Maintanence";
import BreadCrumb from "../common/BreadCrumb";
import FAQ from "../Maintanence/FAQ";
import ContactForm from "../common/ContactForm";

const MaintanencePage = () => {
  return (
    <div>
      <BreadCrumb name="Home" pageName="WordPress Maintenance" icon=">>" />
      <Maintanence />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default MaintanencePage;
