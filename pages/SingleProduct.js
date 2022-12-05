import React, { useState } from "react";
import SingelPStyles from "../styles/basics.module.css";
import { images } from "../usefulData/productImages";
import {
  FaBed,
  FaShower,
  FaPagelines,
  FaRegCalendarAlt,
  FaHome,
} from "react-icons/fa";
import { productFeatures } from "../usefulData/features";
import { MdDone } from "react-icons/md";
import Line from "../components/Line";
import Link from "next/link";
import { CardData } from "../usefulData/cardData";
import SeoHeadTags from "../components/SeoHeadTags";

const SingleProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <SeoHeadTags title="SingleProduct" />
      <div className=" mt-20 pt-2 bg-bg">
        <div
          className={`${SingelPStyles.headerGradient} py-4 flex items-center justify-between lg:px-16 xl:px-32 border-t-2 border-gray-700/40`}
        >
          <div>
            <h1 className=" font-bold text-white text-3xl">Modern House</h1>
            <h2 className=" text-gray-400 text-sm">
              3002 Foster Ave, Brooklyn, NY 11210, USA
            </h2>
          </div>
          <div>
            <h1 className=" font-bold text-white text-3xl">$450,000</h1>
            <h2 className=" text-gray-400 text-sm">$2,800/sq ft</h2>
          </div>
        </div>
        <div className=" py-12 lg:px-16 xl:px-32 ">
          <div className=" w-4/6">
            <img src={images[currentIndex]} className="  rounded-tr-[5rem]" />
            <div className=" grid grid-cols-7 gap-4  mt-4">
              {images &&
                images.length > 0 &&
                images.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className=" cursor-pointer transition-all duration-300 ease-in-out hover:shadow-cardShadow"
                  >
                    <img src={item} className="rounded-tr-[1.5rem]" />
                  </div>
                ))}
            </div>
          </div>
          <div className=" bg-white w-4/6 mt-10 rounded-xl">
            <h2 className=" p-6 font-semibold">Details</h2>
            <div className=" grid grid-cols-5 gap-3 border-t border-gray-300 ">
              <div className=" flex items-center  space-x-2 px-5 py-3 border-r border-gray-300">
                <FaBed />
                <span className=" font-semibold ">3</span>
              </div>
              <div className=" flex items-center  space-x-2 px-5 py-3 border-r border-gray-300">
                <FaShower />
                <span className=" font-semibold ">1</span>
              </div>
              <div className=" flex items-center  space-x-2 px-5 py-3 border-r border-gray-300">
                <FaPagelines />
                <span className=" font-semibold ">1</span>
              </div>
              <div className=" flex items-center  space-x-2 px-5 py-3 border-r border-gray-300">
                <FaHome />
                <span className=" font-semibold ">1</span>
              </div>
              <div className=" flex items-center  space-x-2 px-5 py-3 ">
                <FaRegCalendarAlt />
                <span className=" font-semibold ">1</span>
              </div>
            </div>
          </div>
          <div className=" bg-white w-4/6 mt-10 rounded-xl">
            <h1 className=" px-6 py-7 border-b border-gray-300 font-semibold">
              Description
            </h1>
            <div className=" px-6 py-4 space-y-4">
              <p>
                At vero eos et iusto odio dignissimos ducimus, qui haec putat,
                ut ipsi auctori huius disciplinae placet: constituam, quid sit
                numeranda nec me ab illo inventore veritatis et expedita
                distinctio nam libero tempore, cum memoriter, tum etiam ac
                ratione.
              </p>
              <p>
                Si sine metu degendae praesidia firmissima filium morte multavit
                si sine causa? quae fuerit causa, mox videro; interea hoc
                tenebo, si ob rem voluptas assumenda est, quid sit extremum et
                inter mediocrem animadversionem atque natum sit, a natura
                incorrupte.{" "}
              </p>
              <p>
                Omne animal, simul atque in sanguinem suum tam inportuno tamque
                crudeli; sin, ut earum motus et accusamus et argumentandum et
                dolore suo sanciret militaris imperii disciplinam exercitumque
                in liberos atque haec ratio late patet in quo pertineant non
                possim.
              </p>
            </div>
          </div>
          <div className=" bg-white w-4/6 mt-10 rounded-xl">
            <h1 className=" px-6 py-7 border-b border-gray-300 font-semibold">
              Features
            </h1>
            <div className=" px-6 py-4 grid grid-cols-3 gap-y-4">
              {productFeatures &&
                productFeatures.length > 0 &&
                productFeatures.map((item, index) => (
                  <div key={index} className=" flex items-center space-x-4 ">
                    <div className=" h-5 w-5 rounded-full bg-buttonColor flex items-center justify-center">
                      <MdDone className=" text-white" />
                    </div>
                    <h3>{item}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div className=" py-20">
            <Line />
            <h1 className=" font-extrabold text-gray-900 text-4xl mt-8">
              Similar listings
            </h1>
            <div className=" overflow-x-scroll py-12 ">
              <div className=" flex space-x-5   w-[150rem]">
                {CardData &&
                  CardData.length > 0 &&
                  CardData.map((item, index) => (
                    <Link href="/SingleProduct" key={index}>
                      <div className=" bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out hover:shadow-cardShadow cursor-pointer">
                        <img src={item.image} className="  " alt={item.title} />
                        <h2 className=" px-5 py-2 font-semibold text-lg">
                          {item.title}
                        </h2>
                        <h4 className=" px-5 pb-4 text-gray-400 ">
                          {item.category}
                        </h4>
                        <div className=" grid grid-cols-3 gap-3 border-t border-gray-300 ">
                          <div className=" flex items-center  space-x-2 px-5 py-3 border-r border-gray-300">
                            <FaBed />
                            <span className=" font-semibold ">
                              {item.rooms}
                            </span>
                          </div>
                          <div className=" flex items-center  space-x-2 px-5 py-3 border-r border-gray-300">
                            <FaShower />
                            <span className=" font-semibold ">
                              {item.bathroom}
                            </span>
                          </div>
                          <div className=" flex items-center  space-x-2 px-5 py-3 ">
                            <FaPagelines />
                            <span className=" font-semibold ">
                              {item.kitchen}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
