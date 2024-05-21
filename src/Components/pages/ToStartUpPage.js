import React from "react";

import Calendars from "../ToStartUp/Calender";
import BreadCrumb from "../common/BreadCrumb";
import FAQ2 from "../ToStartUp/FAQ2";

const ToStartUpPage = () => {
  return (
    <div>
      <BreadCrumb
        name="Home"
        pageName="Make an appointment"
        icon=">>"
        icons={true}
      />
      <div className="flex justify-center my-12">
        <Calendars />
      </div>
      <FAQ2 />
    </div>
  );
};

export default ToStartUpPage;
