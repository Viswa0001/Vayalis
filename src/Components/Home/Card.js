import React, { useState } from "react";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";
import Cards from "../../Content/Home/Cards.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Card = () => {
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
    <div ref={ref} className="grid place-items-center md:px-20 px-12">
      <Fade bottom delay={50} when={visible}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 md:space-y-0 space-y-5">
          {Cards.card.map((value, i) => (
            <Tilt>
              <div
                className={`xl:p-8 md:p-4 p-3 shadow-2xl  rounded-lg  transition ease-in-out delay-150 h-fit hover:-translate-y-1 hover:scale-110 duration-300  group ${
                  i === 0
                    ? "hover:bg-gradient-to-br from-orange-400 to-red-400 text-white "
                    : i === 1
                    ? "hover:bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 text-white"
                    : "hover:bg-gradient-to-br from-yellow-300 to-red-500 text-white "
                }`}
                // style={{ height: "300px" }}
              >
                <div className=" grid justify-center lg:space-y-5 md:space-y-3 space-y-2 ">
                  <img
                    src={value.image}
                    alt="img"
                    className="xl:w-[100px] lg:w-[70px] md:w-[50px] w-[100px]"
                  />
                  <h4 className="text-2xl text-black group-hover:text-white">
                    {value.title}
                  </h4>
                  <p className="text-gray-500  group-hover:text-white">
                    {value.description}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Card;
