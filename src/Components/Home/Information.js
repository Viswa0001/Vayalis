import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import information from "../../Content/Home/Information.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Information = () => {
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
    <div ref={ref}>
      {information.info.map((value) => (
        <div className="grid xl:grid-cols-2 grid-cols-1 lg:my-32 my-10 xl:-translate-x-10 ">
          <div className="grid place-content-center">
            <Fade fade delay={100} when={visible}>
              <img
                src={value.img}
                alt="img"
                className="lg:w-[70vw] md:w-[60vw] sm:w-[50vw] w-[40vw] lg:h-[80vh] md:h-[65vh] sm:h-[50vh] h-[35vh] "
                // style={{ transform: "translateX(-10%)" }}
              />
            </Fade>
          </div>
          <div className="lg:space-y-7 space-y-1 md:mt-8 mt-4 md:px-10 px-5 ">
            <Fade bottom delay={150} when={visible}>
              <h1 className="md:text-4xl text-2xl lg::mb-16 mb-4">
                {value.heading}
              </h1>
            </Fade>
            <div className="grid space-y-4 md:space-y-3">
              <Fade bottom delay={200} when={visible}>
                <p>{value.p1}</p>
                <p>{value.p2}</p>
                <p>{value.p3}</p>
                <p>{value.p4}</p>
                <p>{value.p5}</p>
              </Fade>
            </div>

            <div className="">
              <Fade bottom delay={250} when={visible}>
                <button className="bg-[#FF7256] text-white px-5 py-2 rounded-3xl flex items-center gap-5 lg:mt-20 md:mt-10 mt-5 ">
                  {value.button} <FaGreaterThan />
                </button>
              </Fade>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Information;
