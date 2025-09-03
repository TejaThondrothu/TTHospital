export default function HospitalInfo() {
    return (
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 text-white">
          
          {/* Emergency */}
          <div className="bg-teal-500 rounded-2xl p-6 shadow-md flex flex-col justify-between items-center text-center">
            <div>
              <h2 className="text-lg font-semibold">24x7 Emergency</h2>
              <p className="mt-2 text-sm">
                Please feel free to contact us for any general or medical enquiry.
              </p>
            </div>
            <p className="mt-4 text-xl font-bold">+91-7777-999-565</p>
          </div>
  
          {/* Qualified Doctors */}
          <div className="bg-blue-900 rounded-2xl p-6 shadow-md flex flex-col justify-between items-center text-center">
            <h2 className="text-lg font-semibold">Qualified Doctors</h2>
            <p className="mt-2 text-sm">
              Well experienced and qualified doctors are available at APIC Hospital
              for providing the best medical services
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-900 rounded-xl shadow hover:bg-gray-100">
              View Doctors →
            </button>
          </div>
  
          {/* Working Hours */}
          <div className="bg-blue-800 rounded-2xl p-6 shadow-md flex flex-col justify-between items-center text-center">
            <h2 className="text-lg font-semibold">Working Hours</h2>
            <p className="mt-2 text-sm">Monday – Saturday<br />9.00 am – 8.00 pm</p>
            <p className="mt-2 text-sm">Sunday 9.00 am – 2.00 pm</p>
            <p className="mt-2 text-sm font-bold">Emergency: 24HR / 7Days</p>
          </div>
  
        </div>
      </div>
    );
  }
  