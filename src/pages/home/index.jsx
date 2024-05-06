import '../../index.css';
import Navbar from '../navbar';
export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="px-6  lg:px-8  ml-10 mr-10 mt-5">
        <main className="grid lg:grid-cols-2 gap-10">
          <div className="main pt-20">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-indigo-900">Take Care <span className="text-black">of your health with Health Genius.</span></h1>
            </div>
            <p className="text-sm leading-relaxed text-gray-900 my-8">

              At Health Genius, quality healthcare meets digital convenience. Connect with experienced professionals, access informative articles, and receive personalized recommendations. Take control of your health journey with confidence and convenience. Join our online hospital community today.
            </p>
            <div className="flex">
              <div className="flex items-center gap-x-3  md:flex-row ">
                <button
                  className=" rounded-full bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900
               hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 mr-4"

                >
                  Get Started
                </button>
                <button
                  className="
                    rounded-full px-5 py-3 font-semibold text-indigo-900 text-xl border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-white"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="src/assets/img/doctor.png" className="h-auto w-90 lg:w-90" alt="doctor_img" />
          </div>
          <div className="flex items-center mt-10 lg:mt-0 justify-center lg:justify-start mb-10 ">
            <div className="flex flex-col items-center mr-8">
              <img
                src="src/assets/img/hospital.jpeg"
                alt="Hospital Image"
                className="h-16 w-16 lg:h-12 lg:w-12 rounded-full border-2 border-indigo-900 mt-3 md:mt-0"
              />
              <p className="text-center font-bold text-xs lg:text-sm mt-2">30+ health centers and hospitals</p>
            </div>
            <div className="flex flex-col items-center mr-8">
              <img
                src="src/assets/img/material.png"
                alt="Material Image"
                className="h-16 w-16 lg:h-12 lg:w-12 rounded-full border-2 border-indigo-900"
              />
              <p className="text-center font-bold text-xs lg:text-sm mt-2">40+ Doctors and health workers</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="src/assets/img/chemical.png"
                alt="Chemical Image"
                className="h-16 w-16 lg:h-12 lg:w-12 rounded-full border-2 border-indigo-900"
              />
              <p className="text-center font-bold text-xs lg:text-sm mt-2">10+ laboratory associations</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
