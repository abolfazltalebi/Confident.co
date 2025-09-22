import offPic from "../../assets/off.webp";
import { Link } from "react-router-dom";
import {  IoIosArrowDropright } from "react-icons/io";

export default function OffSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-around bg-[#C7F0FD] rounded-2xl  my-8 px-8 sm:px-16 md:px-32">
      <div className="space-y-5">
        <p className="text-[#FF9140] text-[29px] capitalize">
          book dental appointment
        </p>
        <h2 className=" uppercase text-xl sm:text-2xl md:text-6xl font-bold">
          get <span className="text-[#3366FF]">10%-off</span> your first visit
        </h2>
        <p className="text-[#142349]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <Link to={""}>
          <button
            type="button"
            className="px-4 py-1.5 rounded-3xl flex items-center gap-2 bg-[#3366FF] text-white"
          >
            BOOK NOW
            <IoIosArrowDropright />
          </button>
        </Link>
      </div>
      <div className=" flex items-center justify-center">
        <img src={offPic} alt="" />
      </div>
    </section>
  );
}
