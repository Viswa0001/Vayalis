import React, { useRef } from "react";
import data from "../../Content/Home/Reviews.json";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const Reviews = () => {
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
    <div ref={ref} className="lg:p-24 sm:p-6 p-2 md:mt-24 mt-16">
      <div className="">
        <div className="text-center grid place-items-center">
          <Fade bottom delay={50} when={visible}>
            <h3 className="text-[#EC6A50]">{data.title}</h3>
            <h4 className="lg:text-4xl text-lg lg:pb-12 pb-4">
              {data.Heading}
            </h4>
          </Fade>
        </div>
        <div className="">
          <div>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {data.reviews.map((value) => (
                <div className="grid place-items-center justify-center ">
                  <div className=" tracking-wider">
                    <div>
                      <Fade bottom delay={100} when={visible}>
                        <p className="text-center text-sm">
                          {value.description}
                        </p>
                      </Fade>
                    </div>
                    <div className="text-yellow-500 flex justify-center my-4">
                      <Fade bottom delay={150} when={visible}>
                        {[...Array(5)].map((_) => (
                          <FaStar />
                        ))}
                      </Fade>
                    </div>
                    <div className="grid items-center place-items-center">
                      <Fade bottom delay={150} when={visible}>
                        <p className="md:text-xl text-sm md:pb-1 pb-2">
                          {value.name}
                        </p>
                        <small className="text-[#EC6A50]">
                          {value.company}
                        </small>
                      </Fade>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" flex justify-center items-center space-x-5 ">
            <div>
              <Fade bottom delay={200} when={visible}>
                <button
                  className="bg-[#FF7256]  p-3 rounded-full hover:bg-blue-900  md:mt-2 mt-1 md:mr-4 mr-16"
                  onClick={previous}
                >
                  <HiOutlineArrowSmallLeft className="text-white" />
                </button>
                <button
                  className="bg-[#FF7256]  p-3 rounded-full hover:bg-blue-900 "
                  onClick={next}
                >
                  <HiOutlineArrowSmallRight className="text-white" />
                </button>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
