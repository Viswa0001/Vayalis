import React from "react";
import WebsiteSolution from "../Site Creation/WebsiteSolution";
import Performance from "../Site Creation/Performance";
import BreadCrumb from "../common/BreadCrumb";
import CreativeProcess from "../Site Creation/CreativeProcess";
import FAQ from "../Site Creation/FAQ";
import ContactForm from "../common/ContactForm";

const SiteCreationPage = () => {
  return (
    <div>
      <BreadCrumb name="Home" pageName="WordPress SiteCreation" icon=">>" />
      <WebsiteSolution />
      <Performance />
      <CreativeProcess />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default SiteCreationPage;
