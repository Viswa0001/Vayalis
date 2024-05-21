import React from "react";
import MainSlider from "../Home/MainSlider";
import Card from "../Home/Card";
import ButStill from "../Home/ButStill";
import Information from "../Home/Information";
import Carousel from "../Home/Carousel";
import Services from "../Home/Services";
import Guidance from "../Home/Guidance";
import Reviews from "../Home/Reviews";
import Action from "../Home/Action";

const HomePage = () => {
  return (
    <div>
      <MainSlider />
      <Card />
      <ButStill />
      <Information />
      <Carousel />
      <Services />
      <Guidance />
      <Reviews />
      <Action />
    </div>
  );
};

export default HomePage;
