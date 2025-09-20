import FaceBok from "./icons/FaceBok";
import Instagram from "./icons/Instagram";
import Linkdin from "./icons/Linkdin";
import Twiter from "./icons/Twiter";
type DentistCardProps = {
    img: string;
    name: string;
    desc: string;
  };
export default function DentistCard({ img, name, desc }:DentistCardProps) {
  return (
    <div className="relative group max-w-[250px] mx-auto">
      <img src={img} alt={name} className="w-full rounded-lg" />
      <div
        className="relative bg-white bottom-[50px] z-10 h-[86px] group-hover:h-[140px] 
                 overflow-hidden p-4 rounded-2xl text-center 
                 transition-all duration-700 shadow-md"
      >
        <h2 className="font-bold uppercase">{name}</h2>
        <p className="text-zinc-800">{desc}</p>
        <div
          className="flex items-center justify-between mt-4 
                   opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 
                   transition-all duration-700"
        >
          <Linkdin />
          <Instagram />
          <Twiter />
          <FaceBok />
        </div>
      </div>
    </div>
  );
}
