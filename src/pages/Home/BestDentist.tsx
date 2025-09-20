import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bdentist1 from "../../assets/best-dentist-1.webp";
import bdentist2 from "../../assets/best-dentist-2.webp";
import bdentist3 from "../../assets/best-dentist-3.webp";
import DentistCard from "../../components/DentistCard";
import { Swiper, SwiperSlide } from "swiper/react";

const dentists = [
  {
    id: 1,
    name: "Dr. John Doe",
    desc: "Specialist in cosmetic",
    img: bdentist1,
  },
  {
    id: 2,
    name: "Dr. Sarah Smith",
    desc: "Expert in orthodontics",
    img: bdentist2,
  },
  {
    id: 3,
    name: "Dr. Alex Brown",
    desc: "Experienced pediatric dentist",
    img: bdentist3,
  },
  {
    id: 4,
    name: "Dr. Emily White",
    desc: "Implant dentistry specialist",
    img: bdentist1,
  },
  {
    id: 5,
    name: "Dr. Alex Brown",
    desc: "Experienced pediatric dentist",
    img: bdentist3,
  },
];
export default function BestDentist() {
  return (
    <section className="space-y-10">
      <div className="flex items-center justify-center flex-col gap-5 my-4 text-center">
        <p className="text-[#FF9140] font-medium">OUR BEST DENTIST</p>
        <h2 className="text-3xl font-bold leading-snug">
          Dentist For Specialized And{" "}
          <span className="text-[#3366FF]">Experienced Dentistry</span>
        </h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 50 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[350px]"
      >
        {dentists.map((dentist) => (
          <SwiperSlide key={dentist.id}>
            <DentistCard {...dentist} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
