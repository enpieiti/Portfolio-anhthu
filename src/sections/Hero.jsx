import React from "react";

import PROFILE_PIC from "../assets/images/profile.png";
import ICON_1 from "../assets/images/icon-1.svg";
import ICON_2 from "../assets/images/icon-2.svg";
import ICON_3 from "../assets/images/icon-3.svg";
import ICON_4 from "../assets/images/icon-4.svg";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";
const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">Hi, I'm Anh Thư</h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Welcome to visit my personal Website!
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            i'm a web developer. I love building beautiful web experience
          </p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6"></div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img src={PROFILE_PIC} alt="Profile Pic" className="profile-pic" />

          <img src={ICON_1} alt="Icon 1" className="icon-img -left-10 bottom-20 rotate-[1.75deg]" />
          <img src={ICON_2} alt="Icon 2" className="icon-img left-5 md:left-10 -bottom-2 rotate-[2.75deg] " />
          <img
            src={ICON_3}
            alt="Icon 3"
            className="icon-img left-[110px] md:left-[150px]  -bottom-6 rotate-[3.75deg]"
          />
          <img
            src={ICON_4}
            alt="Icon 4"
            className="icon-img left-[200px] md:left-[255px]  -bottom-9 md:-bottom-10 rotate-[4.75deg]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
