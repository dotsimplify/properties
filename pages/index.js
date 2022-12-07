import DropDownMenu from "../components/DropDownMenu";
import Line from "../components/Line";
import { FaLongArrowAltRight } from "react-icons/fa";
import Styles from "../styles/basics.module.css";
import { CardData } from "../usefulData/cardData";
import { FaBed, FaShower, FaPagelines } from "react-icons/fa";
import HeroImageSection1 from "../components/HeroImageSection1";
import HeroImageSection2 from "../components/HeroImageSection2";
import Styles2 from "../styles/basics.module.css";
import CustomButton from "../components/CustomButton";
import Link from "next/link";
import SeoHeadTags from "../components/SeoHeadTags";
import { seo } from "../usefulSEO";

export default function Home() {
  return (
    <>
      <SeoHeadTags
        title={seo.index.title}
        keyword={seo.index.keyword}
        description={seo.index.description}
        Url={seo.index.cenonicalUrl}
      />
      <div>
        <div className="relative ">
          <img src="/images/home.png" className="w-full h-screen " />
          <div
            className={`absolute lg:px-16 xl:px-32 top-0 left-0 right-0 bottom-0 ${Styles.imageOverlay}`}
          >
            <div className="px-2 mt-28 lg:px-0 lg:mt-48">
              <h1 className="text-6xl text-white ">Beautiful</h1>
              <h1 className="text-6xl text-white ">homes made</h1>
              <h1 className="text-6xl text-white ">for you</h1>
              <h3 className="my-6 text-gray-400 lg:w-1/3 font-firsFont">
                In oculis quidem se esse admonere interesse enim maxime placeat,
                facere possimus, omnis. Et quidem faciunt, ut labore et accurate
                disserendum et harum quidem exercitus quid.
              </h3>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 px-5 py-3 bg-white left-4 right-4 lg:left-32 lg:px-12 lg:right-32 lg:py-3">
            <button
              className={` flex items-center space-x-4 border bg-buttonColor px-4 py-2`}
            >
              <h3 className="text-sm font-bold uppercase text-gray-50 ">
                See all Properties
              </h3>
              <FaLongArrowAltRight
                className={` font-bold text-2xl text-white`}
              />
            </button>
          </div>
        </div>
        <HeroImageSection1 />
        <div className="py-40 bg-bg lg:px-16 xl:px-32">
          <div className="px-3 mt-20 ">
            <Line />
            <h1 className="mt-8 text-4xl font-bold text-gray-800 ">
              Find your next place to live
            </h1>
          </div>
          <DropDownMenu />
          <div className="grid grid-cols-1 px-3 py-16 md:grid-cols-3 gap-y-20 md:gap-8 lg:gap-x-20 md:px-6 lg:px-12">
            {CardData &&
              CardData.length > 0 &&
              CardData.map((item, index) => (
                <Link href="/SingleProduct" key={index}>
                  <div className="overflow-hidden transition-all duration-500 ease-in-out bg-white shadow-xl cursor-pointer rounded-xl hover:shadow-cardShadow">
                    <img src={item.image} className="" alt={item.title} />
                    <h2 className="px-5 py-2 text-lg font-semibold ">
                      {item.title}
                    </h2>
                    <h4 className="px-5 pb-4 text-gray-400 ">
                      {item.category}
                    </h4>
                    <div className="grid grid-cols-3 gap-3 border-t border-gray-300 ">
                      <div className="flex items-center px-5 py-3 space-x-2 border-r border-gray-300 ">
                        <FaBed />
                        <span className="font-semibold ">{item.rooms}</span>
                      </div>
                      <div className="flex items-center px-5 py-3 space-x-2 border-r border-gray-300 ">
                        <FaShower />
                        <span className="font-semibold ">{item.bathroom}</span>
                      </div>
                      <div className="flex items-center px-5 py-3 space-x-2 ">
                        <FaPagelines />
                        <span className="font-semibold ">{item.kitchen}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <HeroImageSection2 />
        <div
          className={`${Styles2.footerBg} flex flex-col items-center justify-center  py-20 mt-40`}
        >
          <Line />
          <h1 className="text-4xl font-black text-white mt-7">
            You’re in good hands
          </h1>
          <h4 className="px-4 text-gray-300 lg:px-0 md:px-12 lg:w-1/3 mt-7">
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </h4>
          <CustomButton className="px-6 py-4 mt-16 " />
        </div>
        <div className="flex flex-col items-center justify-center py-20 pb-32 ">
          <Line />
          <p className="px-4 mt-10 text-lg text-justify lg:px-0 md:w-5/6 lg:w-1/4">
            “Certe, inquam, pertinax non existimant oportere exquisitis
            rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et
            quidem faciunt, ut aut.”
          </p>
          <div className="flex flex-col mt-12 md:flex-row md:space-x-20">
            <div className="flex p-6 cursor-pointer ">
              <img
                className="w-16 h-16 rounded-full "
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="ml-4 ">
                <h4 className="font-bold text-gray-900 ">Lara Madrigal</h4>
                <p className="text-gray-400 ">Client</p>
              </div>
            </div>
            <div className="flex p-6 bg-gray-800 cursor-pointer ">
              <img
                className="w-16 h-16 rounded-full "
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="ml-4 ">
                <h4 className="font-bold text-gray-100 ">Lara Madrigal</h4>
                <p className="text-gray-400 ">Client</p>
              </div>
            </div>
            <div className="flex p-6 cursor-pointer ">
              <img
                className="w-16 h-16 rounded-full "
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="ml-4 ">
                <h4 className="font-bold text-gray-900 ">Lara Madrigal</h4>
                <p className="text-gray-400 ">Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
