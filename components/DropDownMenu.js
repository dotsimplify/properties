import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { locationData, priceData } from "../usefulData/dropDownData";

const DropDownMenu = () => {
  const [lookingfor, setLookingfor] = useState(false);
  const [location, setLocation] = useState(false);
  const [price, setPrice] = useState(false);
  return (
    <div className="px-3 mt-4 md:block">
      <div className="grid grid-cols-4 bg-white rounded ">
        <div
          onClick={() => {
            setLookingfor(!lookingfor);
          }}
          className="relative flex items-center justify-between py-4 space-x-3 border-r border-gray-200 cursor-pointer md:px-6 lg:px-12"
        >
          <h4>Looking for</h4>
          <BiChevronDown
            className={` transition-all duration-300 ease-in-out ${
              lookingfor && `rotate-180`
            }`}
          />
          <div
            className={` absolute  -left-3  top-14 right-0 bg-white  
  h-0 transition-all  duration-300 ease-in-out opacity-0 ${
    lookingfor && `opacity-100 h-[5.1rem] `
  }`}
          >
            <h1 className="px-12 py-2 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-white">
              Office
            </h1>
            <h1 className="px-12 py-2 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-white">
              Home
            </h1>
          </div>
        </div>
        <div
          onClick={() => {
            setLocation(!location);
          }}
          className="relative flex items-center justify-between py-4 space-x-3 border-r border-gray-200 cursor-pointer md:px-6 lg:px-12"
        >
          <h4 className="text-sm md:text-base">Location</h4>
          <BiChevronDown
            className={` transition-all duration-300 ease-in-out ${
              location && `rotate-180`
            }`}
          />
          <div
            className={` absolute  -left-3  top-14 overflow-y-scroll right-0 bg-white h-0 transition-all  duration-300 ease-in-out opacity-0 ${
              location && `opacity-100 h-[10.1rem] `
            }`}
          >
            {locationData &&
              locationData.length > 0 &&
              locationData.map((item, index) => (
                <h1
                  key={index}
                  className="py-2 text-sm transition-all duration-300 ease-in-out md:px-12 md:text-base hover:bg-yellow-500 hover:text-white"
                >
                  {item}
                </h1>
              ))}
          </div>
        </div>
        <div
          onClick={() => {
            setPrice(!price);
          }}
          className="relative flex items-center justify-between py-4 space-x-3 cursor-pointer md:px-6 lg:px-12"
        >
          <h4 className="text-sm md:text-base">Price</h4>
          <BiChevronDown
            className={` transition-all duration-300 ease-in-out ${
              price && `rotate-180`
            }`}
          />
          <div
            className={` absolute  -left-3  top-14 overflow-y-scroll right-0 bg-white h-0 transition-all  duration-300 ease-in-out opacity-0 ${
              price && `opacity-100 h-[10.1rem] `
            }`}
          >
            {priceData &&
              priceData.length > 0 &&
              priceData.map((item, index) => (
                <h1
                  key={index}
                  className="px-12 py-2 text-sm transition-all duration-300 ease-in-out md:text-base hover:bg-yellow-500 hover:text-white"
                >
                  {item}
                </h1>
              ))}
          </div>
        </div>
        <div className="flex items-center justify-center text-sm font-semibold text-white bg-yellow-500 rounded-r-lg md:text-base">
          Search Properties
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
