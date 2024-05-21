import React from "react";
import data from "../../Content/Home/Guidance.json";
import { FaGreaterThan } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Guidance = () => {
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
    <div ref={ref} className="xl:flex md:mt-36 mt-24 gap-5 xl:pl-12">
      <div className="md:px-8 px-6 grid place-content-center space-y-4 ">
        <Fade bottom delay={50} when={visible}>
          <h1 className="text-4xl">{data.title}</h1>
        </Fade>

        <div className="mb-10">
          <Fade bottom delay={100} when={visible}>
            <p className="">{data.subTitle}</p>
          </Fade>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 content-center gap-10">
          {data.updates.map((value) => (
            <div className="space-y-8">
              <div className="">
                <Fade bottom delay={100} when={visible}>
                  <img src={value.icon} alt="img" className="w-[70px] " />
                </Fade>
              </div>
              <Fade bottom delay={150} when={visible}>
                <h3 className="font-semibold ">{value.heading}</h3>
                <p className="">{value.description}</p>
              </Fade>
            </div>
          ))}
          <div className="bg-[#FF7256] text-white px-5 py-2 rounded-3xl w-fit mt-5 ">
            <Fade bottom delay={200} when={visible}>
              <button className="flex items-center gap-5 ">
                {data.button} <FaGreaterThan />
              </button>
            </Fade>
          </div>
        </div>
      </div>
      <Fade fade delay={100} when={visible}>
        <div className="overflow-hidden w-full md:mt-0 pt-24 ">
          <img
            src={data.img}
            alt="img"
            className="xl:translate-x-32 lg:w-full w-[800px]"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Guidance;
