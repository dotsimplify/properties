import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { Nav } from "../usefulData/Nav";
import FooterStyles from "../styles/basics.module.css";
import Link from "next/link";
import Logo from "../components/Icons";

const Header = () => {
  const router = useRouter();
  const [navBar, setNavBar] = useState(false);
  const [activenavbar, seActivetNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      // console.log(window.scrollY);
      if (window.scrollY >= 520) {
        seActivetNavbar(true);
      } else {
        seActivetNavbar(false);
      }
    };
    window && window.addEventListener("scroll", changeBackground);
    console.log(window.scrollY, "scroll");
  }, [activenavbar]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-20 ${
        router.pathname == "/" && activenavbar
          ? `${FooterStyles.headerGradient}`
          : ""
      }`}
    >
      <div className="py-2 lg:hidden">
        <div className="flex items-center justify-between px-4 py-2 ">
          <Logo className="w-1/2 h-[50px] " />

          <div
            className="cursor-pointer w-7"
            onClick={() => {
              setNavBar(!navBar);
            }}
          >
            <div
              className={` h-[2px] ${
                navBar ? ` rotate-45 translate-y-0 ` : ``
              } transform transition duration-500 ease-in-out border-gray-100 bg-gray-100 mt-1`}
            ></div>
            <div
              className={` h-[2px] ${
                navBar ? ` hidden` : ``
              } transform transition duration-500 ease-in-out border-gray-100 bg-gray-100 mt-1`}
            ></div>
            <div
              className={` h-[2px] ${
                navBar ? ` -rotate-45 -translate-y-1.5` : ``
              } transform transition duration-500 ease-in-out border-gray-100 bg-gray-100 mt-1`}
            ></div>
          </div>
        </div>
      </div>
      <div className={`${navBar ? "" : "hidden "} lg:block`}>
        <div className="flex items-center justify-between px-2 py-2 transition-all duration-500 ease-in-out transform bg-black lg:px-8">
          <Link href="/">
            <div className="md:flex hidden justify-start max-w-[300px] w-full">
              <Logo className="w-full h-[60px]" />
            </div>
          </Link>
          <div
            className={`flex ${
              navBar ? "flex-row " : "flex-row"
            } justify-between w-full md:w-auto items-center space-x-6 xl:space-x-16`}
          >
            {Nav &&
              Nav.length > 0 &&
              Nav.map((item, index) => (
                <Link href={item.path} key={index}>
                  <div className={` cursor-pointer  text-white `}>
                    <h3 className="text-xs tracking-wider transition-all duration-500 ease-in-out md:text-base hover:scale-105">
                      {item.tilte}
                    </h3>
                  </div>
                </Link>
              ))}
            <div>
              <CustomButton
                className=" md:px-5 md:mx-8 md:text-base md:py-2 bg-buttonColor"
                iconColor=" text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
