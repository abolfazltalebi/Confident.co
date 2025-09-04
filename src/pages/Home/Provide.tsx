import Lawn from "../../components/icons/Lawn";
import Bridig from "../../components/icons/Bridig";
import Dentestry from "../../components/icons/Dentestry";
import Inspection from "../../components/icons/Inspection";
import Advisory from "../../components/icons/Advisory";

export default function Provide() {
  const itemProvide = [
    { id: 1, name: "lawn fertilization", icon: <Lawn /> },
    { id: 2, name: "DENTal bridge", icon: <Bridig /> },
    { id: 3, name: "general dentistry", icon: <Dentestry /> },
    { id: 4, name: "cavity inspection", icon: <Inspection /> },
    { id: 5, name: "live advisory", icon: <Advisory /> },
  ];
  return (
    <section className=" m-8 bg-[#EFF6FF] p-8 rounded-2xl">
      <div className="space-y-4">
        <p className="text-[#FF9140] text-center uppercase">what we provide</p>

        <h2 className="text-4xl md:text-6xl text-center uppercase">
          What{" "}
          <span className="text-blue-500 font-bold text-center">
            the Treatments
          </span>{" "}
          Do We Offer?
        </h2>
      </div>
      <div className="space-y-6 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {itemProvide.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-xl space-y-5 "
            >
              <div>{item.icon}</div>
              <div className="space-y-4">
                <h3 className=" text-[19px] font-bold text-left uppercase text-[#142349]">
                  {item.name}
                </h3>
                <p className="text-[#142349] text-sm text-justify leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {itemProvide.slice(2).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-3 shadow-xl space-y-5 "
            >
              <div>{item.icon}</div>
              <div className="space-y-4">
                <h3 className=" text-[19px] font-bold text-left uppercase text-[#142349]">
                  {item.name}
                </h3>
                <p className="text-[#142349] text-sm text-justify leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
