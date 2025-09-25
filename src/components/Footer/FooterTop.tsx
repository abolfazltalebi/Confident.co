import ArrowFooter from "../icons/ArrowFooter";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import Logo from "../icons/Logo";
import Twiter from "../icons/Twiter";

export default function FooterTop() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="w-full md:w-2/3 space-y-4">
        <Logo />
        <div className="relative w-1/3 min-w-[220px]">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-white rounded-4xl p-3 text-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2">
            <ArrowFooter />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <FacebookIcon />
        <InstagramIcon />
        <Twiter />
        <LinkedinIcon />
      </div>
    </div>
  );
}
