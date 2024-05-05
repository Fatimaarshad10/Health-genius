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
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 items-center mt-10 ml-20">
            <h1 className="text-3xl text-indigo-900 font-bold mr-2">Health</h1>
            <span className="text-3xl font-bold">Genius</span>
          </div>
          <div className="hidden lg:flex lg:gap-x-5 mt-10 mr-20">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6 mr-20">
            <button
              className="rounded-full px-8 py-3 text-xl font-semibold text-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-indigo-900 border-indigo-900"
            >
              Sign In
            </button>
            <button
              className=" rounded-full bg-indigo-900 px-8 py-3 text-xl font-semibold text-white hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
            >
              Sign Up
            </button>
          </div>

        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 ml-10 ">
        <main className=" justify-around grid lg:grid-cols-2 gap-10">
          <div className="main py-40 pl-9">
            <div>
              <div className="text-4xl font-bold">
                <h1 className="text-indigo-900 ">Take Care
                  <span className="text-black ml-2">of your health with Health Genius.</span>
                </h1>
              </div>

            </div>
            <p className="py-10 text-xs">
              Welcome to Health Genius, your virtual gateway to comprehensive healthcare solutions.
              At Health Genius, we understand the importance of accessible and reliable healthcare,
              which is why we're dedicated to providing top-notch medical resources and support
              right at your fingertips. Whether you're seeking medical advice, treatment options, or
              simply looking to stay informed about your health, our platform offers a range of
              services tailored to meet your needs. From connecting with experienced healthcare
              professionals to accessing informative articles and personalized health
              recommendations, we're here to ensure that you receive the care and support you
              deserve, wherever you are. Join our online hospital community today and take control of
              your health journey with confidence and convenience. Welcome to Health Genius, where
              quality healthcare meets the convenience of the digital age.
            </p>
            <div>
              <button className="rounded-full bg-indigo-900 px-10 py-5 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">
                Get Started
              </button>
              <button className="rounded-full px-10 py-5 ml-8 font-semibold text-indigo-900 text-xl border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-white">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-center ml-10">
            <img src="src/assets/img/doctor.png" className="h-auto w-fit" alt="doctor_img" />
          </div>
          <div className="flex items-center -mt-56">
            <div className="flex flex-col items-center">
              <img
                src="src/assets/img/hospital.jpeg"
                alt="Hospital Image"
                className="h-12 w-12 rounded-full border-2 border-indigo-900"
              />
              <p className="text-center font-bold text-xs">30+ health centers and hospitals</p>
            </div>
            <div className="flex flex-col items-center mr-5">
              <img
                src="src/assets/img/material.png"
                alt="Material Image"
                className="h-12 w-12 rounded-full border-2 border-indigo-900"
              />
              <p className="text-center font-bold text-xs">40+ Doctors and health workers</p>
            </div>
            <div className="flex flex-col items-center mr-5">
              <img
                src="src/assets/img/chemical.png"
                alt="Chemical Image"
                className="w-12 h-12 rounded-full border-2 border-indigo-900"
              />
              <p className="text-center font-bold text-xs">10+ laboratory associations</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
