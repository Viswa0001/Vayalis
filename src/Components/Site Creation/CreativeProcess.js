import React from "react";
import data from "../../Content/Site Creation/CreativeProcess.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const CreativeProcess = () => {
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
    <div ref={ref} className="xl:px-52 lg:px-24  px-4">
      <div className="grid justify-center items-center space-y-2 mb-8">
        <Fade bottom delay={50} when={visible}>
          <h3 className="text-center text-[#F77055]">{data.heading}</h3>
          <h2 className="lg:text-4xl md:text-2xl text-xl">{data.subHeading}</h2>
        </Fade>
      </div>
      <div className="md:px-24  ">
        {data.process.map((value) => (
          <Fade bottom delay={100} when={visible}>
            <div className="flex gap-6 mb-8">
              <div className="w-1/8">
                <div
                  className=" rounded-full grid place-content-center w-16 h-16 text-xl font-bold"
                  style={{ backgroundColor: value.color }}
                >
                  <p>{value.id}.</p>
                </div>
              </div>
              <div className="grid space-y-4">
                <h4 className="font-semibold md:text-2xl text-lg">
                  {value.title}
                </h4>
                <p>{value.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default CreativeProcess;
