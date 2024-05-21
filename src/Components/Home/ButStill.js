import React from "react";
import still from "../../Content/Home/ButStill.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const ButStill = () => {
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
    <div ref={ref} className="bg-[#F9F9F9] pt-10">
      <Fade bottom delay={50} when={visible}>
        <h1 className="font-semibold text-5xl text-center">But Still..</h1>
      </Fade>
      <Fade bottom delay={50} when={visible}>
        <div className="px-[50px] my-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:space-x-10 space-y-5">
          {still.ButStill.map((value) => (
            <div className="grid justify-center space-y-4 py-10 bg-white  hover:shadow-2xl hover:text-[#EC6A50]">
              <div className="">
                <Fade bottom delay={100} when={visible}>
                  <img src={value.image} alt="img" className="w-[130px]" />
                </Fade>
              </div>

              <div className="flex justify-center items-end">
                <Fade bottom delay={150} when={visible}>
                  <h1 className="font-semibold">{value.title}</h1>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </Fade>
      <h1 className="text-center font-semibold">
        We also work in <span className="text-[#FF7256]">white label</span>
      </h1>
    </div>
  );
};

export default ButStill;
