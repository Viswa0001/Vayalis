import React from "react";
import data from "../../Content/Footer/Footer.json";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#051C3C] text-white md:py-16 sm:py-8 py-2 md:px-16 sm:px-12 px-3 ">
      <div className="md:flex  grid md:justify-between">
        <div className="grid md:space-y-2 space-y-3  justify-center">
          <div className="flex space-x-5">
            <h1 className="text-3xl">VAYALIS</h1>
            <div className="flex items-center gap-1">
              <div className="bg-[#4E5265] rounded-full p-1.5 hover:bg-[#EC6A50]">
                <TiSocialLinkedin />
              </div>
              <div className="bg-[#4E5265] rounded-full p-1.5 hover:bg-[#EC6A50]">
                <FaFacebookF />
              </div>
              <div className="bg-[#4E5265] rounded-full p-1.5 hover:bg-[#EC6A50]">
                <RiTwitterXLine />
              </div>
            </div>
          </div>
          <div>
            <small>{data.address}</small>
          </div>
        </div>
        <div className="grid md:space-y-2 space-y-5 md:px-4 px-2 md:mt-0 mt-10">
          <div className="md:flex grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:space-x-6">
            {data.link.map((value) => (
              <div className="hover:text-[#EC6A50]">
                <Link to={value.path}>{value.link1}</Link>
              </div>
            ))}
          </div>
          <div className="gap-2 flex  md:justify-end justify-center ">
            <small>{data.copyright}</small>
            <small className="hover:text-[#EC6A50] underline md:underline-offset-4 decoration-orange-500">
              {data.name}
            </small>
            <small>{data.rights}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
