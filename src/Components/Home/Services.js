import React from "react";
import data from "../../Content/Home/Services.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Services = () => {
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
    <div ref={ref} className="lg:px-24 md:px-12 px-6 space-y-4 mt-20  ">
      <div className="grid justify-items-center space-y-3 pb-12 xl:px-64 ">
        <Fade bottom delay={50} when={visible}>
          <h3 className="text-orange-400">{data.heading}</h3>
          <h3 className="lg:text-4xl text-xl font-semibold text-center ">
            {data.subHeading}
          </h3>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:gap-8 ">
        {data.services.map((value) => (
          <div className="grid place-content-center justify-items-center place-items-center p-2 space-y-3">
            <div className="bg-[#E7674E] rounded-full md:p-4 p-2 w-fit">
              <div className="bg-[#EC6A50] rounded-full md:p-2 p-1 w-fit">
                <Fade bottom delay={100} when={visible}>
                  <img
                    src={value.logo}
                    alt="img"
                    className="lg:w-[50px] w-[30px]"
                  />
                </Fade>
              </div>
            </div>
            <Fade bottom delay={150} when={visible}>
              <h3 className="font-bold md:text-md text-sm">{value.title}</h3>
              <p className="text-center md:text-md text-xs ">
                {value.description}
              </p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
