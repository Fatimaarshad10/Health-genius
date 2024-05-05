import '../../index.css';
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Doctors', href: '#' },
  { name: 'Facilities', href: '#' },
  { name: 'More', href: '#' },
]

export default function Home() {
  return (
    <div className="bg-white ">
      <header className="absolute inset-x-0 top-0 z-50 mt-10 ml-10 mr-10">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center">
            <h1 className="text-3xl text-indigo-900 font-bold mr-2">Health</h1>
            <span className="text-3xl font-bold">Genius</span>
          </div>
          <div className="hidden lg:flex lg:gap-x-5">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-x-6">
            <button
              className="rounded-full px-6 py-3 text-xl font-semibold text-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-indigo-900 border-indigo-900"
            >
              Sign In
            </button>
            <button
              className="rounded-full bg-indigo-900 px-6 py-3 text-xl font-semibold text-white hover:bg-white hover:text-indigo-900
               hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <div className="px-6 pt-20 lg:px-8 mt-32 ml-10 mr-10">
        <main className="grid lg:grid-cols-2 gap-10">
          <div className="main">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-indigo-900">Take Care <span className="text-black">of your health with Health Genius.</span></h1>
            </div>
            <p className="text-sm leading-relaxed text-gray-900 my-8">
              Welcome to Health Genius, your virtual gateway to comprehensive healthcare solutions. At Health Genius, we understand the importance
              of accessible and reliable healthcare, which is why we're dedicated to providing top-notch medical resources
              and support right at your fingertips. Whether you're seeking medical advice, treatment options, or simply looking
              to stay informed about your health, our platform offers a range of services tailored to meet your needs. From connecting with
              experienced healthcare professionals to accessing informative articles and personalized health recommendations,
              we're here to ensure that you receive the care and support you deserve, wherever you are. Join our online hospital community today
              and take control of your health journey with confidence and convenience. Welcome to Health Genius, where quality healthcare meets the
              convenience of the digital age.
            </p>
            <div className="flex">
              <button className="rounded-full bg-indigo-900 px-10 py-5 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900
               hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 mr-4">
                Get Started
              </button>
              <button className="rounded-full px-10 py-5 font-semibold text-indigo-900 text-xl border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="src/assets/img/doctor.png" className="h-auto w-full lg:w-auto" alt="doctor_img" />
          </div>
          <div className="flex items-center mt-10 lg:mt-0 justify-center lg:justify-start mb-10">
            <div className="flex flex-col items-center mr-8">
              <img
                src="src/assets/img/hospital.jpeg"
                alt="Hospital Image"
                className="h-16 w-16 lg:h-12 lg:w-12 rounded-full border-2 border-indigo-900"
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
