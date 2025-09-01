import logoOne from "../../assets/logo-1.webp";
import logoTwo from "../../assets/logo-2.webp";
import logoTree from "../../assets/logo-3.webp";
import LogoFour from "../../assets/logo-4.webp";

export default function ClinicPartners() {
  return (
    <section className=" p-8 md:p-0 space-y-4">
      <div className="flex items-center justify-center">
        <h2 className="text-[#FF9140] capitalize">our clinic partners</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-4">
        <div>
          <img src={logoOne} alt="Clinic partner 1" />
        </div>
        <div>
          <img src={logoTwo} alt="Clinic partner 2" />
        </div>
        <div>
          <img src={logoTree} alt="Clinic partner 3" />
        </div>
        <div>
          <img src={LogoFour} alt="Clinic partner 4" />
        </div>
        <div>
          <img src={logoOne} alt="Clinic partner 5" />
        </div>
      </div>
    </section>
  );
}
