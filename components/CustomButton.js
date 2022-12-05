import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const CustomButton = ({ className }) => {
  return (
    <>
      <button
        className={`${className} flex group  items-center space-x-4 bg-buttonColor rounded-tr-3xl`}
      >
        <h3 className=" font-semibold text-white text-sm">Instant Enquiry</h3>
        <RiWhatsappFill
          className={`  text-2xl text-white group-hover:animate-bounce`}
        />
      </button>
    </>
  );
};

export default CustomButton;
