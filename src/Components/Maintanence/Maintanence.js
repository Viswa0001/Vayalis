import React from "react";
import data from "../../Content/Maintanence/Maintanence.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Maintanence = () => {
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
    <div ref={ref} className="lg:px-64 md:px-16 sm:px-8 ">
      <div className="md:p-8 p-3 leading-8 ">
        <Fade bottom delay={50} when={visible}>
          <p className="text-md">{data.Paragraph}</p>
          <div className="grid space-y-5 mt-16">
            <h2 className="text-4xl font-semibold">{data.title}</h2>
            {data.Maintanence.map((value) => (
              <p className="">{value.description}</p>
            ))}
            <p className=" font-semibold">{data.subTitle}</p>
          </div>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-16 gap-10 ">
        {data.icons.map((d) => (
          <div className="grid space-y-1 justify-items-center place-content-center">
            <Fade bottom delay={100} when={visible}>
              <div className="bg-[#CF604E] rounded-full p-4">
                <div className="bg-[#EC6A50] rounded-full w-20 h-20 grid place-content-center ">
                  <img src={d.icon} alt="img" className="w-12 h-12" />
                </div>
              </div>
            </Fade>
            <Fade bottom delay={100} when={visible}>
              <h4 className="font-semibold">{d.title}</h4>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maintanence;
