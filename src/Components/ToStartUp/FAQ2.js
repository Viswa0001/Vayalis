import React, { useState } from "react";
import data from "../../Content/ToStartUp/FAQ2.json";

import Accordion from "../common/Accordion";
const FAQ2 = () => {
  return (
    <div className="bg-[#FFEBEB] py-10 px-12">
      <div className="grid place-items-center space-y-2 mb-8">
        <h3 className="text-[#EC6A50] ">{data.heading}</h3>
        <h2 className="lg:text-4xl sm:text-3xl text-xl ">{data.subHeading}</h2>
      </div>

      <div className=" rounded-lg grid space-y-4">
        {data.faq.map((value) => (
          <Accordion title={value.question} answer={value.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ2;
