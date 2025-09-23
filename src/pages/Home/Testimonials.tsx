import testimonial from "../../assets/testimonial.webp";
import avatar1 from "../../assets/avataar-1.webp";
import avatar2 from "../../assets/avataar-2.webp";
import avatar3 from "../../assets/avataar-3.webp";
import avatar4 from "../../assets/avataar-4.webp";
import star from "../../assets/ star.png";
import { TestimonialCard } from "../../components/TestimonialCard";

type Testimonial = {
  avatar: string;
  star: string;
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: avatar1,
    star: star,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor magni possimus! Aperiam, voluptatem quo.",
    name: "Ryan Gigs",
    role: "Patient",
  },
  {
    avatar: avatar2,
    star: star,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor magni possimus! Aperiam, voluptatem quo.",
    name: "Ryan Gigs",
    role: "Patient",
  },
  {
    avatar: avatar3,
    star: star,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor magni possimus! Aperiam, voluptatem quo.",
    name: "Ryan Gigs",
    role: "Patient",
  },
  {
    avatar: avatar4,
    star: star,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolor magni possimus! Aperiam, voluptatem quo.",
    name: "Ryan Gigs",
    role: "Patient",
  },
];

export function Testimonials() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4  rounded-3xl p-8 md:p-0">
      {/* Left Section */}
      <div>
        <div className="space-y-4">
          <p className="text-[#FF9140] text-[29px] capitalize">TESTIMONIAL</p>
          <h2 className="uppercase text-xl sm:text-2xl md:text-5xl font-bold">
            Enhancing Your Smile &{" "}
            <span className="text-[#3366FF]">Your Confidence</span>
          </h2>
        </div>
        <div>
          <img src={testimonial} alt="testimonial" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap gap-4 items-center justify-content-center">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
