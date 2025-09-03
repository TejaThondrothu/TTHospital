import React from 'react';

const doctors = [
  {
    name: 'Dr. Venkateswara Rao Kalluri',
    title: 'M.D. General Medicine, Fever and ICU Specialist',
    image: 'https://apichospital.com/wp-content/uploads/2023/01/106-1062139_free-clipart-of-a-faceless-business-man-avatar.jpg',
    description: [
      "He is the MD in General Medicine with specialisation in critical care treatment at APIC Hospital holding upto 6 years of experience in his overall history of medical practice. His range of expertise covers treatment of diabetes, thyroid, fevers as well as skilled in providing sound medical advisory.",
      "He has previously worked in Manipal Health Enterprises Pvt. Ltd. in the critical care department as well as rendering medical service at Venkata Ramana Nursing Home Pvt. Ltd. for a tenure of over 4 years. Having been a Resident at Katuri Medical College & Hospital, a reputed private medical college in the state of Andhra Pradesh, for a tenure over 3 years, he has acquired credible skills in patient care and medicine."
    ]
  },
  {
    name: 'Dr. Aparna Vadlamudi',
    title: 'DNB General Medicine (Sugar Specialist)',
    image: 'https://apichospital.com/wp-content/uploads/2023/01/71-716892_woman-avatar-icon-png-transparent-png-855x1024.png',
    description: [
      "Her expertise lies in general medicine and diabetes. With academic excellence and practical experience to back her career as a practitioner, patients who need to be treated for stubborn and lifestyle diseases like diabetes are referred to her.",
      "She has worked as a Consultant Physician in Manipal and other reputed hospitals for past 5 years, thereby, gaining credible goodwill, reputation and trust of her patients."
    ]
  }
];

const DoctorsSection = () => {
  return (
    <section className="bg-gradient-to-b from-teal-50 to-white-400 py-12 px-4 sm:px-6 lg:px-16 font-sans">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Doctors</h2>

      <div className="space-y-10">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            {/* Image */}
            <div className="flex-shrink-0 flex items-center justify-center p-6 bg-gray-50">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-32 h-32 lg:w-40 lg:h-40 object-contain rounded-xl"
              />
            </div>

            {/* Text */}
            <div className="p-6 flex-1">
              <h3 className="text-lg font-bold text-gray-800">{doc.name}</h3>
              <p className="text-sm font-semibold text-emerald-600 mb-3">{doc.title}</p>
              {doc.description.map((para, i) => (
                <p key={i} className="text-gray-700 mb-3 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
