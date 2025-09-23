import HeroSection from "./HeroSection";
import ClinicPartners from "./ClinicPartners";
import AboutSection from "./AboutSection";
import Provide from "./Provide";
import History from "./History";
import BestDentist from "./BestDentist";
import OffSection from "./OffSection";
import { Testimonials } from "./Testimonials";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ClinicPartners />
      <AboutSection />
      <Provide />
      <History />
      <BestDentist />
      <OffSection />
    <Testimonials/>
    </>
  );
}
