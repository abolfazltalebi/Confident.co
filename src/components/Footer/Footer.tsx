import WorkingHours from "./ WorkingHours";
import FooterMenu from "./FooterMenu";
import FooterTop from "./FooterTop";

const footerMenus = [
  {
    title: "About",
    items: ["Home", "About Us", "Services", "Pages", "Contact"],
  },
  {
    title: "Pages",
    items: ["Services", "Dentist", "Pricing", "Contact", "404 Page"],
  },
  {
    title: "Support",
    items: ["Contact Us", "Booking online", "Social Media"],
  },
  {
    title: "Contact Us",
    items: ["Social Media", "WhatsApp", "Email"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#C7F0FD] py-14">
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8">
        <FooterTop />

        <div className="my-10 w-full h-1 bg-blue-300 rounded-2xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <WorkingHours />

          {footerMenus.map((menu, idx) => (
            <FooterMenu key={idx} title={menu.title} items={menu.items} />
          ))}
        </div>
      </div>
    </footer>
  );
}
