import { Link } from 'react-router-dom'
import Check from '../../components/icons/Check'
import aboutImage from '../../assets/aaboutSection.png'

const itemAbout = [
  { id: 1, name: 'Modern Equipment' },
  { id: 2, name: 'Comfortable Clinic' },
  { id: 3, name: 'Easy Online Appointment' },
  { id: 4, name: 'Always Monitored' },
]

export default function AboutSection() {
  return (
    <section className="space-y-4 my-12 grid grid-cols-1 sm:grid-cols-2 items-center">
        <div>
          <img src={aboutImage} alt="About our clinic" />
        </div>
        <div className="space-y-4">
          <p className="text-[#FF9140] capitalize">our clinic partners</p>

          <h2 className="text-4xl md:text-6xl">
            your{' '}
            <span className="text-blue-500 font-bold">trusted partner</span>
            {' '}for dental health
          </h2>
          <p className="text-base text-[#142349]">
            Our team is dedicated to providing the best possible dental care for
            you. A healthy smile is a happy smile – we help you achieve both!
          </p>
          <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2">
            {itemAbout.map((iAbout) => (
              <div key={iAbout.id} className="flex items-center gap-2">
                <div>
                  <Check />
                </div>
                <div>
                  <p>{iAbout.name}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Link to="/about" className="text-[#5C85FF] underline duration-500 hover:bg-[#5C85FF] hover:text-white hover:px-12 py-4 rounded-2xl">Read More</Link>
          </div>
        </div>
      </section>
  )
}
