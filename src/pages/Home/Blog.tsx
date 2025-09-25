import { Link } from "react-router-dom";
import braveLitter from "../../assets/brave-little-boy-visiting-dentist.webp";
import bortaite from "../../assets/portrait-of-dentist-doctor-with-digital-tablet.webp";
import portrait from "../../assets/little-boy-at-the-dentist.webp";
import { IoIosArrowDropright } from "react-icons/io";

export default function Blog() {
  return (
    <section className="space-y-4 p-8 md:p-0 my-20">
      <div className="space-y-0 md:space-y-y6">
        <p className="text-[#FF9140]">OUR BLOG</p>
        <div className="flex items-center gap-4 justify-between">
          <div>
            <h2 className=" font-bold text-base sm:text-xl md:text-4xl text-blue-500 capitalize">
              Our latest blog & news
            </h2>
          </div>
          <div>
            <Link to={""}>
              <button className="flex items-center gap-3 capitalize text-white bg-blue-600  px-8 py-4 rounded-2xl transition-all duration-500 hover:px-12 cursor-pointe capitalizer">
                find more
                <IoIosArrowDropright />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="relative flex items-center flex-col">
          <div>
            <img src={braveLitter} className="rounded-4xl" alt="" />
          </div>
          <div className="absolute left-7 right-7 bottom-0 p-4 space-y-4">
            <p className="text-sm text-[#ADC2FF]">December 15, 2024</p>
            <h2 className="text-lg  font-bold text-white">
              Highlight: benefits of routine dental check-ups in children under
              12 years old
            </h2>
            <Link to={""}>
              <button className="flex items-center gap-3 capitalize text-blue-400 bg-white px-8 py-2 rounded-2xl transition-all duration-500 hover:px-12 cursor-pointer">
                read more
                <IoIosArrowDropright />
              </button>
            </Link>
          </div>
        </div>
        <div className=" space-y-4 ">
          <div className="item-1 relative">
            <div>
              <img src={bortaite} className="rounded-4xl max-w-full" alt="" />
            </div>
            <div className="absolute bottom-4 p-4 space-y-4">
              <p className="text-sm text-[#ADC2FF]">December 15, 2024</p>
              <h2 className="text-lg w-[90%] font-bold text-white ">
                Highlight: benefits of routine dental check-ups in children
                under 12 years old
              </h2>
              <Link to={""}>
                <button className="flex items-center gap-3 capitalize text-blue-400 bg-white px-8 py-2 rounded-2xl transition-all duration-500 hover:px-12 cursor-pointer">
                  read more
                  <IoIosArrowDropright />
                </button>
              </Link>
            </div>
          </div>
          <div className="item-2 relative">
            <div>
              <img src={portrait} className="rounded-4xl" alt="" />
            </div>
            <div className="absolute bottom-0 p-4 space-y-4">
              <p className="text-sm text-[#ADC2FF]">December 15, 2024</p>
              <h2 className="text-lg w-[90%] font-bold text-white ">
                Highlight: benefits of routine dental check-ups in children
                under 12 years old
              </h2>
              <Link to={""}>
                <button className="flex items-center gap-3 capitalize text-blue-400 bg-white px-8 py-2 rounded-2xl transition-all duration-500 hover:px-12 cursor-pointer">
                  read more
                  <IoIosArrowDropright />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
