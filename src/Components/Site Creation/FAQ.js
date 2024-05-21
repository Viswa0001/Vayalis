import React, { useState } from "react";
import data from "../../Content/Site Creation/FAQ.json";

import Accordion from "../common/Accordion";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const FAQ = () => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div ref={ref} className="bg-[#FFEBEB] py-10 px-12">
      <div className="grid place-items-center space-y-2 mb-8">
        <Fade bottom delay={50} when={visible}>
          <h3 className="text-[#EC6A50] ">{data.heading}</h3>
          <h2 className="lg:text-4xl sm:text-3xl text-xl ">
            {data.subHeading}
          </h2>
        </Fade>
      </div>

      <div className=" rounded-lg grid space-y-4">
        <Fade bottom delay={100} when={visible}>
          {data.faq.map((value) => (
            <Accordion title={value.question} answer={value.answer} />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default FAQ;
