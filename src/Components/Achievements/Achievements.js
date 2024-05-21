import React from "react";
import data from "../../Content/Achievements/Achievements.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Achievements = () => {
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
    <div ref={ref} className="xl:my-24 my-12 ">
      <div className="xl:px-80 md:px-8 px-2">
        <Fade bottom delay={50} when={visible}>
          <div className=" lg:p-12 grid place-items-center lg:space-y-4 space-y-2 text-lg">
            <h3 className="text-[#F77055] uppercase">{data.heading}</h3>
            <h2 className="xl:text-4xl lg:text-2xl md:text-xl md:text-start text-center">
              {data.subHeading}
            </h2>
            <div className="">
              <p className="text-center md:text-md text-sm">{data.descrip}</p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:px-20 px-6 gap-16 my-12">
        {data.achievements.map((value) => (
          <div className="group grid place-items-center">
            <Fade bottom delay={100} when={visible}>
              <img
                src={value.img}
                alt="img"
                className="lg:w-[300px] w-[250px] rounded-lg shadow-xl mb-6"
              />
              <h4 className="text-xl text-center group-hover:text-[#F77055]">
                {value.title}
              </h4>
              <p className="text-center">{value.description}</p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
