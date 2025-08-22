import { Link } from "react-router-dom";
import heroSection from "../assets/heroSection.webp";
import Play from "../components/icons/Play";
export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 items-center p-8 md:p-0 gap-4 my-10">
        <div className="space-y-4">
          <p className="text-lg text-[#FF9140] uppercase ">
            welcome to CONFIDENT
          </p>
          <h2 className="text-4xl md:text-7xl">
            high quality &{" "}
            <span className="text-blue-500 font-bold">painless</span> dentistry
          </h2>
          <p className="text-[#142349]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className="flex gap-3">
            <Link to={"/"}>
              <button
                type="button"
                className="px-4 py-2 rounded-4xl bg-[#3366FF] text-white"
              >
                CONTACT US
              </button>
            </Link>
            <Link to={"/"}>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-2 rounded-4xl"
              >
                <Play />
                watch video profile
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={heroSection} alt="" />
        </div>
      </section>
    </>
  );
}
