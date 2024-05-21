import React from "react";
import WebAgency from "../WebAgency/WebAgency";
import BreadCrumb from "../common/BreadCrumb";
import ContactForm from "../common/ContactForm";

const WebAgencyPage = () => {
  return (
    <div>
      <BreadCrumb name="Home" pageName="Our agency" icon=">>" />
      <WebAgency />
      <ContactForm />
    </div>
  );
};

export default WebAgencyPage;
