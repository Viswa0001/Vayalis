import React from "react";
import data from "../../Content/Site Creation/WebisteSolution.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const WebsiteSolution = () => {
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
    <div ref={ref} className="mt-24">
      <div className="xl:px-64 lg:px-32 md:px-12 px-4">
        <div className="grid place-items-center space-y-4 mb-12">
          <Fade bottom delay={50} when={visible}>
            <h3 className="text-[#F77055] text-sm uppercase md:text-start text-center">
              {data.title}
            </h3>
            <h2 className="lg:text-4xl text-xl font-semibold md:text-start text-center ">
              {data.subTitle}
            </h2>
            <p className="text-center ">{data.descp}</p>
          </Fade>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-16 md:px-8 px-4">
        {data.solution.map((value) => (
          <div className="grid space-y-1 justify-items-center">
            <Fade bottom delay={100} when={visible}>
              <img src={value.img} alt="img" className="w-[90px] mb-5" />
              <h4 className="font-semibold">{value.heading}</h4>
              <p className="text-center">{value.description}</p>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteSolution;
