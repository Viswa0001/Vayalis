import React from "react";
import data from "../../Content/Site Creation/Performance.json";
import { PiGreaterThanThin } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Performance = () => {
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
    <div ref={ref} className="my-24">
      <div className="lg:px-64 md:px-32 px-8">
        <div className="grid place-items-center space-y-4 mb-12">
          <Fade bottom delay={50} when={visible}>
            <h3 className="text-[#F77055] text-sm uppercase">{data.title}</h3>
            <h2 className="lg:text-4xl text-xl font-semibold">
              {data.subTitle}
            </h2>
            <p className="text-center ">{data.descp}</p>
          </Fade>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-16">
        {data.performance.map((value) => (
          <div className="grid space-y-1 justify-items-center place-content-center">
            <Fade bottom delay={100} when={visible}>
              <div className="bg-[#CF604E] rounded-full p-4">
                <div className="bg-[#EC6A50] rounded-full w-20 h-20 grid place-content-center ">
                  <img src={value.img} alt="img" className="w-12 h-12" />
                </div>
              </div>
            </Fade>
            <Fade bottom delay={100} when={visible}>
              <h4 className="font-semibold">{value.heading}</h4>
              <p className="text-center">{value.description}</p>
            </Fade>
          </div>
        ))}
      </div>
      <div className="grid place-content-center mt-12">
        <div className="bg-[#FF7256] rounded-3xl text-white px-4 py-2 w-fit ">
          <Fade bottom delay={100} when={visible}>
            <button className="flex items-center gap-3">
              {data.button} <PiGreaterThanThin />
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Performance;
