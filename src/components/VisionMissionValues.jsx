import { motion } from "framer-motion";

const items = [
  {
    title: "Vision",
    text: `To create an environment of world class healthcare system where brilliant minds come together to cultivate, protect and restore health by employing cutting edge technology backed by holistic research that only evolves and never stops. Because our priority is our patients and they deserve the best of medicine, advice and guarantee of good health. 

APIC Hospital’s motto is “Where Cure welcomes Hope and Hope greets Future” because the APIC Family brings out the best medical advice for our patients that makes hope of a better, healthier and wealthier future a reality.`,
    img: "https://apichospital.com/wp-content/uploads/2023/01/img-3-768x512.jpg",
  },
  {
    title: "Mission",
    text: `APIC Hospital is where you will see brilliant minds working their magic to relieve everyone who comes to us. Our team is imbibed with the skills to deliver first-class patient care services that perfectly balance their needs and circumstantial requirement.

Our mission is to nurture and employ medically advanced and sound professionals so that a future where healthcare is a privilege no longer lies someone in need go unattended without due care. We aim to continuously improve and become an active contributor to society’s well-being and development.`,
    img: "https://apichospital.com/wp-content/uploads/2023/01/img-9-768x512.jpg",
  },
  {
    title: "Values",
    text: `The value system followed at APIC Hospital is founded on four pillars – Service, Knowledge, Sincerity and Compassion. 

We at APIC Hospital ensure that amid the cold hospital walls, our patients feel the warmth of our care givers and front line workers have for them, from the moment they step into our world, our aim is to welcome our patients and make them realize that we are here for them and will take their hand through every step of their healing.`,
    img: "https://apichospital.com/wp-content/uploads/2023/01/img-2-768x431.jpg",
  },
];

export default function VisionMissionValues() {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image alternating left/right */}
            {index % 2 === 0 ? (
              <>
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold text-teal-700 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
