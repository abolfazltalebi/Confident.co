type TestimonialCardProps = {
  avatar: string;
  star: string;
  text: string;
  name: string;
  role: string;
};

export function TestimonialCard({
  avatar,
  star,
  text,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-white shadow-xs  shadow-[#3366FF] rounded-3xl p-4  transition-all duration-300 hover:scale-105 md:w-[48%]">
      <div className="mb-3">
        <img src={avatar} alt={name} />
        <img src={star} alt="rating" />
      </div>
      <div className="space-y-4">
        <p className="text-sm leading-normal  break-all">{text}</p>
        <p className="text-sm font-bold text-[#3366FF]">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}
