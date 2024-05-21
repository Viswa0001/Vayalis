import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGreaterThan } from "react-icons/fa6";
import slider from "../../Content/Home/Slider.json";
import Slider from "react-slick";
import logo from "../Assets/circle-scatter-haikei.svg";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

const MainSlider = () => {
  const [data, setData] = useState();
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center">
          <div className="flex justify-between">
            <span>{dots}</span>
          </div>
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="mt-2">
        <div className="h-1 bg-black/30 rounded-md active-class"></div>
      </div>
    ),
  };
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
      style={{
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="md:pb-36 pb-12"
      ref={ref}
    >
      <Slider {...settings}>
        {slider.slide.map((value) => (
          <div className="grid place-content-center items-center text-start space-y-5 px-2 mt-24 mb-24  w-full">
            <div className="flex justify-center">
              <Fade bottom delay={50} when={visible}>
                <button className="border rounded-xl md:px-3 px-2 md:py-2 py-1 bg-[#FF7256] text-white uppercase">
                  {value.heading}
                </button>
              </Fade>
            </div>
            <div className=" flex items-center place-content-center ">
              <Fade bottom delay={100} when={visible}>
                <h3 className="md:text-4xl text-2xl font-bold md:w-1/2 text-center">
                  {value.title}
                </h3>
              </Fade>
            </div>
            <div className="grid place-items-center space-y-5 px-2 md:px-0">
              <Fade bottom delay={150} when={visible}>
                <p className="md:w-1/2 text-center md:text-md text-sm md:px-16">
                  {value.description}
                </p>
              </Fade>
              <Fade bottom delay={200} when={visible}>
                <button className="flex items-center gap-4 border rounded-3xl px-3 py-2 mb-5 bg-[#FF7256] text-white w-fit">
                  {value.button} <FaGreaterThan />
                </button>
              </Fade>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
