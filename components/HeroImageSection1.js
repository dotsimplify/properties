import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Line from "./Line";

const HeroImageSection = () => {
  return (
    <div className=" flex items-center  relative mt-20">
      <div className=" lg:w-1/2   ">
        <img
          src="/images/team.jpg"
          className=" rounded-tr-[5rem] shadow-imageShadow top-[30rem] md:top-[26rem] md:w-9/12  w-11/12 xl:top-10  lg:top-20 lg:w-5/12 absolute left-0  lg:h-full "
        />
      </div>
      <div className=" lg:w-1/2 px-3 pb-56 lg:pb-8 md:pb-[23rem] space-y-8 py-20 pt-28">
        <Line className="" />
        <h1 className=" text-4xl font-bold text-gray-900 ">
          You’re in good hands
        </h1>
        <p className=" lg:w-9/12 w-full  text-gray-500  ">
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
    </div>
  );
};

export default HeroImageSection;
