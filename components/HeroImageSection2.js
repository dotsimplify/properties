import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Line from "./Line";

const HeroImageSection2 = () => {
  return (
    <div className=" flex items-center  relative ">
      <div className=" lg:w-1/2 lg:px-16 xl:px-32 py-20 md:pt-[25rem] pt-60 lg:pt-10 px-4  space-y-8  ">
        <Line className="" />
        <h1 className=" text-4xl font-bold text-gray-900 ">
          You’re in good hands
        </h1>
        <p className="  w-full  text-gray-500  ">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        <button
          className={` flex items-center space-x-4 bg-gray-900  rounded-tr-3xl px-5 py-3 `}
        >
          <h3 className=" font-bold text-white text-sm">See all listings</h3>
          <FaLongArrowAltRight
            className={` font-bold text-2xl text-buttonColor`}
          />
        </button>
      </div>
      <div className=" lg:w-1/2   ">
        <img
          src="/images/team.jpg"
          className=" rounded-tl-[5rem] shadow-imageShadow absolute -top-24 lg:-top-16 lg:h-full bottom-0 w-11/12 md:w-9/12  right-0  lg:w-1/2 "
        />
      </div>
    </div>
  );
};

export default HeroImageSection2;
