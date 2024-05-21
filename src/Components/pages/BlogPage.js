import React from "react";
import Blog from "../Blog/Blog";
import BreadCrumb from "../common/BreadCrumb";
import ContactForm from "../common/ContactForm";
import Slider from "../Blog/Slider";

const BlogPage = () => {
  return (
    <div>
      {/* <BreadCrumb name="Home" pageName="Blog" icon=">>" input={true} />
      <Blog />
      <ContactForm /> */}
      <Slider />
    </div>
  );
};

export default BlogPage;
