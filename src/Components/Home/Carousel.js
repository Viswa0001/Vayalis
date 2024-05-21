import React, { useRef } from "react";
import data from "../../Content/Home/Carousel.json";
import { FaGreaterThan } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

const Carousel = () => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="" ref={ref}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {data.slider.map((value) => (
          <div className="">
            <div className="lg:flex grid w-full md:h-[65vh] md:relative md:z-50">
              <div className=" md:px-12 px-4 pt-8 md:w-1/2 mt-5 grid items-center bg-[#FFEBEB] md:left-0">
                <div className="space-y-5 md:pb-0 pb-10">
                  <Fade bottom delay={50} when={visible}>
                    <h1 className="md:text-5xl text-3xl text-bold hover:text-[#EC6A50]">
                      {value.title}
                    </h1>
                    <h2 className="md:text-2xl text-lg">{value.subTitle}</h2>
                  </Fade>
                  <div className="bg-[#EC6A50] text-white md:px-4 px-2 md:py-2 py-1 rounded-3xl  w-fit">
                    <Fade bottom delay={100} when={visible}>
                      <button className="flex items-center gap-5 ">
                        {value.button} <FaGreaterThan />
                      </button>
                    </Fade>
                  </div>
                </div>
                <div className="self-end ">
                  <div className="md:block hidden ">
                    <div>
                      <Fade bottom delay={100} when={visible}>
                        <button
                          className="bg-[#EC6A50] text white p-4 hover:bg-blue-900 hover:text-white"
                          onClick={previous}
                        >
                          <HiOutlineArrowSmallLeft className="text-white" />
                        </button>
                        <button
                          className="bg-[#EC6A50] text white p-4 hover:bg-blue-900 hover:text-white"
                          onClick={next}
                        >
                          <HiOutlineArrowSmallRight className="text-white" />
                        </button>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:absolute relative md:right-0 md:w-1/2 md:z-50 ">
                <Fade bottom delay={150} when={visible}>
                  <img
                    src={value.img}
                    alt="img"
                    className="md:h-[70vh] w-full"
                  />
                </Fade>
                <div className="absolute bottom-0 left-3 md:hidden block ">
                  <div className="">
                    <div>
                      <button
                        className="bg-[#EC6A50] text white p-4 hover:bg-blue-900 hover:text-white"
                        onClick={previous}
                      >
                        <HiOutlineArrowSmallLeft className="text-white" />
                      </button>
                      <button
                        className="bg-[#EC6A50] text white p-4 hover:bg-blue-900 hover:text-white"
                        onClick={next}
                      >
                        <HiOutlineArrowSmallRight className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#EC6A50] text-white md:flex justify-center items-center gap-24 md:px-10 px-5 md:py-20 py-8">
              <div className=" text-lg">
                <Fade bottom delay={150} when={visible}>
                  <p>{data.heading}</p>
                  <p className="font-semibold">{data.description}</p>
                </Fade>
              </div>
              <div className="bg-white text-[#EC6A50] lg:px-4 md:px-3 px-4 lg:py-2 py-1 rounded-3xl w-fit mt-10 md:mt-0 ">
                <Fade bottom delay={150} when={visible}>
                  <button className="flex items-center gap-5  text-xs md:text-sm w-full ">
                    {data.button2} <FaGreaterThan />
                  </button>
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
