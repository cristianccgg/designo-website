import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const locations = [
  {
    image: "/images/locations/tablet/image-map-canada.png",
    title: "Canada",
    subtitles: ["Designo Central Office", "Contact"],
    details1: ["3886 Wellington Street", "Toronto, Ontario M9C 3j5"],
    details2: ["P : +1 253-863-8967", "M : contact@designo.co"],
  },
  {
    image: "/images/locations/tablet/image-map-australia.png",
    title: "Australia",
    subtitles: ["Designo AU Office", "Contact"],
    details1: ["19 Balonne Street", "New South Wales 2443"],
    details2: ["P : (02) 6720 9092", "M : contact@designo.co"],
  },
  {
    image: "/images/locations/tablet/image-map-uk.png",
    title: "United Kingdom",
    subtitles: ["Designo UK Office", "Contact"],
    details1: ["13 Colorado Way", "Rhyd-y-fro SA8 9GA"],
    details2: ["P : 078 3115 1400", "M : contact@designo.co"],
  },
];

export const Locations = () => {
  const { country } = useParams();
  const locationRefs = useRef([]);

  useEffect(() => {
    if (country) {
      const locationIndex = locations.findIndex(
        (loc) => loc.title.toLowerCase() === country.toLowerCase()
      );
      if (locationIndex !== -1) {
        locationRefs.current[locationIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [country]);

  return (
    <div className="flex flex-col gap-[40px] pb-[120px] sm:mx-auto sm:w-[689px] lg:w-[850px] xl:pb-0 xl:w-[1112px]">
      {locations.map((location, index) => (
        <div
          className="sm:w-full flex flex-col items-center sm:gap-[31px] xl:flex-row"
          key={index}
          ref={(el) => (locationRefs.current[index] = el)}
        >
          <img
            className=" h-[320px] sm:rounded-xl w-full sm:h-[326px] xl:w-[350px] object-cover xl:order-2"
            src={location.image}
            alt={location.title}
          />
          <div className="bg-verylightpeach w-full  py-[80px] pz-[24px] sm:gap-[100px] sm:p-0 sm:items-center sm:rounded-xl sm:justify-center sm:h-[326px] flex flex-col sm:flex-row gap-[24px] text-center">
            <div className="flex flex-col gap-[24px] sm:text-start">
              <h1 className="text-peach text-[32px]">{location.title}</h1>
              <div className="text-[15px] leading-[25px]">
                <h2 className="font-bold ">{location.subtitles[0]}</h2>
                <h3>{location.details1[0]}</h3>
                <h3>{location.details1[1]}</h3>
              </div>
            </div>
            <div className="sm:text-start sm:mt-[72px]">
              <h2 className="font-bold">{location.subtitles[1]}</h2>
              <div>
                <h3>{location.details2[0]}</h3>
                <h3>{location.details2[1]}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
