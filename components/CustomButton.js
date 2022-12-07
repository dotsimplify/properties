import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const CustomButton = ({ className }) => {
  return (
    <>
      <button
        className={` flex group  items-center py-1 px-2  md:space-x-4 bg-buttonColor rounded-tr-3xl ${className}`}
      >
        <h3 className="text-xs font-semibold text-white md:text-sm ">
          Instant Enquiry
        </h3>
        <RiWhatsappFill
          className={`  text-2xl text-white group-hover:animate-bounce`}
        />
      </button>
    </>
  );
};

export default CustomButton;
