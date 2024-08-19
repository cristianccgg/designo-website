import React from "react";
import { Countries } from "/src/components/Countries.jsx";
import heroImgMobile from "/public/images/about/desktop/image-about-hero.jpg";
import heroPatternMobile from "/public/images/about/desktop/bg-pattern-hero-about-desktop.svg";
import wordlTalentImg from "/public/images/about/mobile/image-world-class-talent.jpg";
import wordlTalentImgTablet from "/public/images/about/tablet/image-world-class-talent.jpg";
import wordlTalentImgDesktop from "/public/images/about/desktop/image-world-class-talent.jpg";
import realDealImg from "/public/images/about/mobile/image-real-deal.jpg";
import realDealImgTablet from "/public/images/about/tablet/image-real-deal.jpg";
import realDealImgDesktop from "/public/images/about/desktop/image-real-deal.jpg";
import heroImgDesktop from "/public/images/about/desktop/image-about-hero.jpg";
import heroImgTablet from "/public/images/about/tablet/image-about-hero.jpg";

export const About = () => {
  return (
    <div className="pb-[120px] xl:pb-[80px] sm:max-w-[689px] sm:mx-auto xl:max-w-[1110px] lg:max-w-[850px]">
      <div className="sm:rounded-xl sm:overflow-hidden sm:mb-[120px] xl:flex xl:h-[480px]">
        <img className="w-full sm:hidden" src={heroImgMobile} alt="hero-img" />
        <img
          className="sm:h-[345px] w-full object-cover hidden sm:block xl:hidden"
          src={heroImgTablet}
          alt="hero-img"
        />
        <img
          className="sm:h-[345px] xl:h-full w-[476px] object-cover hidden xl:block order-2"
          src={heroImgDesktop}
          alt="hero-img"
        />
        <img src="" alt="" />
        <div className="bg-peach text-white px-[24px] py-[80px] flex flex-col items-center xl:items-start xl:w-[640px] xl:ps-[95px]  justify-center gap-[24px] relative">
          <img
            className="absolute -top-32 left-[83px] w-[292px] sm:scale-150 xl:scale-[200%] xl:top-10 xl:left-[200px]"
            src={heroPatternMobile}
            alt="hero-pattern"
          />
          <h1 className="sm:text-[48px] text-[32px] font-medium text-center xl:text-start">
            About Us
          </h1>
          <p className="sm:w-[573px] text-[15px] xl:w-[450px] leading-body font-light text-center xl:text-start">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className="sm:rounded-xl sm:overflow-hidden xl:flex xl:h-[640px] mt-[120px]">
        <img
          className="sm:hidden w-full h-full"
          src={wordlTalentImg}
          alt="wordl-talent"
        />
        <img
          className="hidden sm:block w-full h-full xl:hidden"
          src={wordlTalentImgTablet}
          alt="wordl-talent"
        />
        <img
          className="hidden xl:block  h-full w-[476px]"
          src={wordlTalentImgDesktop}
          alt="wordl-talent"
        />
        <div className="bg-verylightpeach relative flex flex-col gap-[24px] xl:ps-[95px] w-full items-center xl:items-start xl:text-start justify-center px-[24px] py-[80px] text-center">
          <h1 className="text-peach text-[32px] sm:text-[40px]">
            World-class talent
          </h1>
          <p className="sm:w-[572px] text-[15px] leading-body font-light xl:w-[445px]">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p className="sm:w-[572px] text-[15px] leading-body font-light xl:w-[445px]">
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <Countries />
      <div className="sm:rounded-xl sm:overflow-hidden xl:flex">
        <img className="sm:hidden w-full" src={realDealImg} alt="real-deal" />
        <img
          className="hidden sm:block xl:hidden w-full h-[320px]"
          src={realDealImgTablet}
          alt="real-deal"
        />
        <img
          className="hidden xl:block order-2"
          src={realDealImgDesktop}
          alt="real-deal"
        />
        <div className="bg-verylightpeach relative flex flex-col gap-[24px] w-full items-center xl:ps-[95px] xl:items-start xl:text-start justify-center px-[24px] py-[80px] text-center">
          <h1 className="text-peach text-[32px]">The real deal</h1>
          <p className="text-[15px] leading-body font-light xl:w-[445px]">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="text-[15px] leading-body font-light xl:w-[445px]">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
};
