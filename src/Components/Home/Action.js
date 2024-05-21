import React from "react";
import data from "../../Content/Home/Action.json";
import { FaGreaterThan } from "react-icons/fa6";
import logo from "../Assets/wavesNegative.svg";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

const Action = () => {
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
    <div
      ref={ref}
      style={{
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" md:px-16 px-8 md:pt-12 py-8 ">
        <div className="lg:flex justify-center  items-center md:space-x-24 md:space-y-0 space-y-5">
          <div className="md:px-0 px-10 ">
            <Fade bottom delay={50} when={visible}>
              <img src={data.img} alt="" className="lg:w-full w-[400px]" />
            </Fade>
          </div>
          <div className="grid space-y-7 md:w-1/2 text-white">
            <div className="text-center md:text-start">
              <Fade bottom delay={100} when={visible}>
                <h1 className="text-xl  font-semibold">{data.title}</h1>
                <p>{data.dexcription}</p>
              </Fade>
            </div>
            <div className="bg-[#051C3C] md:justify-self-start justify-self-center text-white px-5 py-2 rounded-3xl w-fit">
              <Fade bottom delay={150} when={visible}>
                <button className="flex items-center gap-4 ">
                  {data.button}
                  <FaGreaterThan />
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
