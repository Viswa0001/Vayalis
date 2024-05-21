import React, { useRef } from "react";
import Slider from "react-slick";
import logo from "../Assets/bathroom.jpg";
import logo2 from "../Assets/kitchen.jpg";
import logo3 from "../Assets/living.jpg";
import logo4 from "../Assets/mfs.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Sliders = () => {
  const data = [
    {
      id: 1,
      img: logo,
      title: "Bathroom",
      description:
        "Find your bathroom. Choose the bathroom in harmony with you and your home",
      button: "find your bathroom",
    },
    {
      id: 2,
      img: logo2,
      title: "Kitchen",
      description:
        " Find your dream kitchen, in perfect harmony with you and your home! ",
      button: "find your kitchen",
    },
    {
      id: 3,
      img: logo3,
      title: "Living",
      description:
        " Scavolini programme to furnish homes with versatility, convenience and style. Design that makes no distinction between personalisation and personality. ",
      button: "discuss our proposal for the living-room",
    },
    {
      id: 4,
      img: logo4,
      title: "Multi-Functional systems",
      description: " Lots of versatile solutions for all rooms in the house. ",
      button: "discover boxlife",
    },
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-[#F2F1F2]">
      <div className="grid place-items-center space-y-5 mb-10 md:px-8 px-2">
        <h4 className="md:text-4xl text-2xl font-semibold">
          Your desires have helped us grow
        </h4>
        <p className="md:w-1/2 text-lg text-gray-700 text-center">
          From the kitchen to the bathroom, the walk-in wardrobe and the living
          room. We have become a home, together.
        </p>
      </div>
      <div className="md:flex grid-cols-2  place-content-center mb-10  hidden gap-5">
        <button className="button" onClick={previous}>
          <HiOutlineArrowLongLeft className="text-4xl hover:text-[#C00D0D]" />
        </button>
        <button className="button" onClick={next}>
          <HiOutlineArrowLongRight className="text-4xl hover:text-[#C00D0D]" />
        </button>
      </div>

      <div className="">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {data.map((value) => (
            <div className=" grid space-y-5  md:px-7 px-2 w-fit h-auto">
              <div
                className="flex xl:h-[75vh] h-[60vh] w-[29w]    mb-4 "
                style={{
                  backgroundImage: `url(${value.img})`,

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p className=" text-white lg:w-[70%]  pb-5 pl-4 lg:text-4xl text-3xl  font-semibold self-end">
                  {value.title}
                </p>
              </div>

              <h3 className="text-gray-600 text-base">{value.description}</h3>
              <div className="p-3">
                <button className=" self-end uppercase w-fit text-[#C00D0D] font-bold">
                  {value.button}
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex gap-5 place-content-center mt-5 md:hidden ">
          <button className="button" onClick={previous}>
            <HiOutlineArrowLongLeft className="text-4xl hover:text-[#C00D0D]" />
          </button>
          <button className="button" onClick={next}>
            <HiOutlineArrowLongRight className="text-4xl hover:text-[#C00D0D]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
