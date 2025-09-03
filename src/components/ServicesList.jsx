// import React from "react";
// import { FaLaptopCode, FaMobileAlt, FaCloud, FaLock } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     icon: <FaLaptopCode className="text-5xl text-blue-600" />,
//     title: "Web Development",
//     description:
//       "We build fast, responsive, and modern websites tailored to your business needs.",
//   },
//   {
//     id: 2,
//     icon: <FaMobileAlt className="text-5xl text-green-600" />,
//     title: "Mobile Apps",
//     description:
//       "Cross-platform mobile applications with smooth performance and great UX.",
//   },
//   {
//     id: 3,
//     icon: <FaCloud className="text-5xl text-purple-600" />,
//     title: "Cloud Solutions",
//     description:
//       "Secure, scalable, and reliable cloud-based services to boost your business.",
//   },
//   {
//     id: 4,
//     icon: <FaLock className="text-5xl text-red-600" />,
//     title: "Cyber Security",
//     description:
//       "Protect your data and systems with our advanced cybersecurity solutions.",
//   },
// ];

// const ServicesList = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Section Heading */}
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our <span className="text-blue-600">Services</span>
//         </h2>

//         {/* Grid Layout */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
//             >
//               <div className="mb-4 flex justify-center">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
//               <p className="text-gray-600 text-sm">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesList;




import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: 'Diabetes',
    description:
      'Considering that nowadays, diabetes has become a side-effect of an unhealthy, stress-induced lifestyle with lack of physical activities, there has been a surge of lifestyle diseases like diabetes, obesity, etc.',
    details:
      'One needs to understand that any negative lifestyle routine will cause multiple problems. The good news is that at APIC, you will find doctors who are experienced and specialise diabetic treatments.',
    symptomsTitle:
      'The common symptoms of diabetes that a patient and caregivers should look out for are:',
    symptoms: [
      'Frequent urination often at night, excessive thirst',
      'Unintended weight loss, excessive hunger',
      'Extremely dry skin',
      'Tingling/numb sensation in hands or feet',
      'Fatigue',
      'Blurry vision',
    ],
    note:
      'The patient should call the doctor for enquiry into the type of diabetes that they may have- Type 1, Type 2, Prediabetes or Gestational diabetes. It is advised that the patient must get their blood sugar check to rule out any other possible cause of any of the above-mentioned symptoms',
  },
  {
    title: 'Hypertension',
    description:
      'Hypertension occurs when the blood pressure is extremely high and if untreated, can lead to heart diseases and stroke. It is a very common problem and the symptoms the patient must look out for are:',
    symptoms: [
      'Irregular heart rhythm',
      'Chest pain and muscle tremors',
      'Fatigue, nausea, vomiting',
      'Other symptoms include early morning headaches, nosebleeds, anxiety, shortness of breath',
    ],
  },
  {
    title: 'Fevers',
    description:
      'At APIC, you will find the best medicinal options for mosquito borne diseases like malaria and dengue',
    subServices: [
      {
        subtitle: '1. Malaria',
        description: 'Common symptoms of malaria are:',
        symptoms: [
          'Fever',
          'Shivering and shaking chills',
          'Muscle aches and tiredness',
          'Nausea, vomiting, diarrhoea',
          'Other symptoms include anaemia and jaundice',
        ],
      },
      {
        subtitle: '2. Dengue',
        description: 'Common symptoms of dengue are:',
        symptoms: [
          'High fever',
          'Headache',
          'Rash',
          'Muscle and joint pain',
          'Other symptoms include easy bruising, vomiting, nausea, loss of appetite',
        ],
      },
    ],
  },
  {
    title: 'Anaemia',
    description:
      'Anaemia treatment depends upon the cause of the same. Anaemia can be aplastic, iron deficiency, sickle cell, thalassemia and vitamin deficiency.',
    symptoms: [
      'Fatigue and weakness',
      'Pale skin',
      'Palpitations',
      'Shortness of breath and dizziness',
      'Headaches and cold hands and feet',
    ],
    note:
      'Note that mild anaemia shows no symptoms, only when it worsens do the symptoms become prominent. Anaemia can be prevented if the patient follows balanced diet and takes their nutrient supplements as prescribed.',
  },
  {
    title: 'Bronchial Asthma and Chronic Obstructive Pulmonary Disease (COPD)',
    description:
      'For chronic asthma, the patient is given inhaled corticosteroids, leukotriene modifiers, combination inhalers and theophylline. All these medications have to be taken on a daily basis to prevent the likelihood of frequent asthma attacks. Common symptoms of asthma include shortness of breath, chest tightness or pain, wheezing, trouble sleeping due to coughing or wheezing or shortness of breath along with respiratory virus worsening asthma attacks.',
    symptoms: [
      'Frequent coughing or wheezing (dry)',
      'Excessive phlegm',
      'Shortness of breath',
      'Trouble in taking a deep breath',
      'Inability to exercise',
      'Frequent respiratory infections',
    ],
    note:
      'Both Asthma and COPD have similar symptoms, hence, the patient must see the doctor to enquire the actual cause of coughing and correct medication.',
  },
  {
    title: 'Tuberculosis',
    description:
      'TB requires immediate medical care and the patient should see the doctor when the following symptoms occur:',
    symptoms: [
      'Fever',
      'Cough (with or without sputum)',
      'Weight loss',
      'Loss of appetite',
      'Night sweats',
    ],
  },
];

const ProcedureList = [
  {
    title: 'Admission Process',
    steps: [
      'Patient must report to the Reception of the Hospital and provide primary information of the health issue and/or medical advice needed',
      'The Front Office Executive will then refer the Patient to the concerned Department/Doctor for detailed check-up',
      'Upon detailed check-up, unless required, the Patient will be directed to go to the Dispensary or the recommended Pharmacy to purchase the prescribed medicine',
      'If the Patient is admitted, an Initial Assessment by the Chief Medical Officer or Senior Doctor with substantial experience is to be conducted',
      'An Attendant to the Patient will be provided to the Patient while the Admission Request Form is being duly filed',
      'Before the final authorization of admission, the Patient shall be informed of the estimated bill, average stay period, documents required, modes of payments, all kinds of tests and procedures the patient will be subjected to and whether they are necessary in nature, their risks and statistics of success/failures, etc.',
    ],
  },
  {
    title: 'Discharge Process',
    steps: [
      'Upon recommendation by a Specialist that the Patient is fit for discharge, the primary Attendant of the Patient must assist in filling out the Discharge form and other necessary paperwork.',
      'The final medical bill will be provided and upon query, the Patient is at the liberty to request an itemized bill.',
      'All items of the Patient must be returned, including the medical tools like thermometer, urinal bedpan, etc.',
      'Upon discharge, collect the prescribed medicines from the Dispensary or the recommended Pharmacy.',
      'In case the Patient needs a medical ambulance, it is advised that it be prior informed to the Attendant within a window of 24 hours.',
    ],
  },
  {
    title: "Guidelines for Visitors",
    steps: [
      "Maintain silence in the hallways and emergency units.",
      "Keep children away from medical appliances and emergency units. Children below 12 years not allowed.",
      "If you have fever, cold, cough, nasal drainage, diarrhoea or any other contagious disease, please do not visit.",
      "Keep visits short and brief.",
      "Visitors must ensure cleanliness and personal hygiene by way of masks, hand wash and sanitizers.",
      "Visitors must keep their visitors pass on them whenever issued. Misplacing the same shall invite nominal fine as charge of Rs 100/-.",
      "Visitors are prohibited from accompanying the patient during tests.",
      "The entire hospital is a ‘No Smoking Zone’. If found, a charge of Rs. 500/- shall be charged for violating the rule.",
      "In case of fire, use Fire staircase.",
      "No pets or animals allowed.",
    ]
  },
  {
    title: "Guidelines for Visiting Intensive Care Units (ICUs)",
    steps: [
      "No children allowed in the ICUs. Prior consent of the CMO and Attendant must be needed in writing and duly submitted at the Reception for verification.",
      "The visits at the ICU must be limited to 30 minutes in a day in total. Prior permission of the CMO is required for extension.",
      "No electronics allowed in the ICU except mobile phones that must be kept silent. If a visitor is carrying any other item, please submit the same at the Reception before entering and collect before leaving.",
      "Not more than 2 people are allowed to visit someone at the ICU in one time.",
      "The visitors must be accompanied by 2 Attendants. In case of unavailability, one attendant apart from the Primary Attendant must be present at all times with the visitors."
    ]
  }
];

const ServiceList = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 mb-10 border border-gray-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-sky-900 mb-2">
            {service.title}
          </h2>
          <p className="text-gray-700 mb-2">{service.description}</p>
          {service.details && <p className="text-gray-700 mb-2">{service.details}</p>}
          {service.symptomsTitle && (
            <p className="text-gray-700 font-medium mb-2">{service.symptomsTitle}</p>
          )}
          {service.symptoms && (
            <div className="bg-cyan-50 p-4 rounded-md">
              {service.symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start space-x-2 mb-2">
                  <FaCheckCircle className="text-teal-500 mt-1" />
                  <p className="text-sm font-medium text-sky-900">{symptom}</p>
                </div>
              ))}
            </div>
          )}
          {service.subServices &&
            service.subServices.map((sub, sIdx) => (
              <div key={sIdx} className="mt-4">
                <h3 className="font-semibold text-sky-800 mb-1">{sub.subtitle}</h3>
                <p className="text-gray-700 mb-1">{sub.description}</p>
                <div className="bg-cyan-50 p-4 rounded-md">
                  {sub.symptoms.map((symptom, idx) => (
                    <div key={idx} className="flex items-start space-x-2 mb-2">
                      <FaCheckCircle className="text-teal-500 mt-1" />
                      <p className="text-sm font-medium text-sky-900">{symptom}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          {service.note && (
            <p className="text-sm text-gray-600 mt-4 italic">{service.note}</p>
          )}
        </div>
      ))}

      <div className="text-center my-10">
        <h2 className="text-2xl font-bold text-sky-900 mb-4">
          General Front Desk Procedure and Guidelines Followed
        </h2>
        <img
          src="https://apichospital.com/wp-content/uploads/2023/01/pic.png"
          alt="Procedure"
          className="mx-auto max-w-xs md:max-w-sm mb-8"
        />
      </div>

      {ProcedureList.map((procedure, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md p-6 mb-10 border border-gray-100"
        >
          <h3 className="text-xl md:text-2xl font-bold text-sky-900 mb-4">
            {procedure.title}
          </h3>
          <ul className="list-none space-y-3">
            {procedure.steps.map((step, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-teal-500 mt-1">
                  <FaCheckCircle />
                </span>
                <span className="text-gray-700 text-sm md:text-base">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;















