import React, { useState } from "react";
// import backgroundImage from "../../../public/assets/img/Heart.jpeg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DoctorProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center h-3/4"
          // style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="relative flex items-end h-full">
          <img className="rounded-full w-48 h-48 ml-10 mt-80 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-72 xl:h-72" src="/public/assets/img/boy-1.jpg" alt="image description" />
        </div>
      </div>

      <div className=" p-6 mt-4 flex flex-col md:flex-row">
        <div className="md:mr-4 border border-gray-400 p-10">
          <h1 className="text-2xl font-bold">Dr. Ahmed Alvi</h1>
          <p className="mb-4">Al-Shifa hospital, cannal foad, Islamabad</p>
          <hr />
          <h1 className="text-2xl font-bold mt-5">Doctor Profile</h1>
          <p className="mr-5">With a seasoned career spanning four years, our ENT specialist brings a wealth of
            experience and expertise to the field. Having dedicated their professional journey
            to ear, nose, and throat health, they have honed their skills in diagnosing and
            treating a wide range of ENT conditions. Their commitment to staying abreast of
            the latest advancements in the field ensures that patients receive cutting-edge care.</p>
          <p className='mt-4 text-indigo-700'>See More</p>
        </div>
        <div className=" w-full border border-gray-400 md:w-full xl:w-full p-4 mt-4 md:mt-0">
          <p className="text-2xl font-bold">Medical Actions</p>
          <ul className="list-disc pl-8">
            <li>BERA (Brainstem Evoked Response Audiometry)</li>
            <li>ENT Surgery</li>
            <li>ENT Corpus Alienum Extraction</li>
          </ul>
          <p>Extraction</p>
          <ul className="list-disc pl-8">
            <li>Ear Endoscopy</li>
            <li>Ear Irrigation</li>
            <li>Tiltoplasty</li>
            <li>Hearing Test</li>
          </ul>
          <div className="flex justify-center">
            <button
              className="mt-5 rounded-md bg-indigo-900 px-4 py-2 text-md font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>
      <div className=" p-6 mt-4 flex flex-col md:flex-row justify-between">
        <div className=" ">
          <h1 className="text-2xl font-bold">3,876 Community reviews</h1>
          <div className="flex lg:flex-row flex-col lg:gap-40 mt-10 lg:ml-20 text-center ">
            <div className="">
              <h1 className="text-xl  ">Wait time</h1>
              <p className="lg:mt-5">12min</p>
            </div>
            <div>
              <h1 className="text-xl mt-2 lg:mt-0">Avg. patient time</h1>
              <p className="lg:mt-5">15min</p>
            </div>
            <div>
              <h1 className="text-xl mt-2 lg:mt-0">Diagnosis satisfaction</h1>
              <p className="lg:mt-5">96%</p>
            </div>
          </div>
          <div className="flex flex-col mt-10 ">
            <div className="border border-gray-200 p-10 ">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row  gap-3">
                  <img class="rounded-full object-cover w-20 h-20" src="/public/assets/img/girl-1.jpg" alt="" />
                  <h1 className="mt-5 font-bold text-xl">Verified Person</h1>
                </div>
                <img class=" flex object-cover w-100 h-10" src="/public/assets/img/message.png" alt="message" />
              </div>
              <div className="mt-5">
                <p className="text-xl">Received excellent care and relief for my issues from a highly
                  skilled specialist.</p>
              </div>
            </div>
            <div className="border border-gray-200 p-10 relative">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row  gap-3">
                  <img class="rounded-full object-cover w-20 h-20" src="/public/assets/img/girl-1.jpg" alt="" />
                  <h1 className="mt-5 font-bold text-xl">Verified Person</h1>
                </div>
                <img class=" flex object-cover w-100 h-10" src="/public/assets/img/message.png" alt="message" />
              </div>
              <div className="mt-5">
                <p className="text-xl">Received excellent care and relief for my issues from a highly
                  skilled specialist.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400  p-5 bg-indigo-200">
          <p className="text-2xl font-bold">Get Appointment Online</p>
          <p className="text-2xl font-bold">1- Hospital/Clinic</p>
          <div className=" flex flex-col ">
            <div className="border border-gray-400 p-3 mt-2">
              <h1 className="font-bold "> (Video Consultation)</h1>
              <p>Rs 2000</p>
              <p className="text-indigo-900"> Available today 2:00pm-5:00pm</p>
              <p className="text-green-900">Online</p>
            </div>
            <div className="border border-gray-400 p-3 mt-2">
              <h1 className="font-bold "> (Video Consultation)</h1>
              <p>Rs 2000</p>
              <p className="text-indigo-900"> Available today 2:00pm-5:00pm</p>
              <p className="text-green-900">Online</p>
            </div>
            <div className="border border-gray-400 p-3 mt-2">
              <h1 className="font-bold "> (Video Consultation)</h1>
              <p>Rs 2000</p>
              <p className="text-indigo-900"> Available today 2:00pm-5:00pm</p>
              <p className="text-green-900">Online</p>
            </div>
          </div>

          <form class="max-w-[16rem] mx-auto grid grid-cols-2 gap-4 mt-5">
            <div>
              <label for="start-time" class="block mb-2 text-sm font-medium ">Start time:</label>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="time" id="start-time" class=" border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " min="09:00" max="18:00" value="00:00" required />
              </div>
            </div>
            <div>
              <label for="end-time" class="block mb-2 text-sm font-medium ">End time:</label>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg class="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="time" id="end-time" class=" border leading-none border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " min="09:00" max="18:00" value="00:00" required />
              </div>
            </div>
          </form>
          <div className="mt-5 lg:ml-3 ml-20 ">
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="rounded"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="mt-1"
                  viewBox="0 0 48 48"
                >
                  <mask id="ipSApplication0">
                    <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
                      <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                      <path
                        fill="#fff"
                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                      ></path>
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSApplication0)"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>

      </div>
      <div class="border border-indigo-900  p-5 w-full mt-10 
       ">
        <h1 class='text-2xl font-bold mb-6 ml-5'>Qualification</h1>
        <div className="flex flex-row p-5 gap-60">
          <div className="flex flex-col ">
            <h1 class='text-2xl'>Institute</h1>
            <p className="mt-10"> Rawalpindi medical college, Pakistan</p>
            <hr class="h-px my-8  "></hr>

            <p className="mt-5 ">
              College of physicians and surgeons, Pakistan
            </p>
            <hr class="h-px my-8 "></hr>
            <p className="mt-5  ">
              American academy of anesthetic medicine
            </p>
            <hr class="h-px my-8 "></hr>

          </div>
          <div className="flex flex-col">
            <h1 class='text-2xl'>Position</h1>
            <p className="mt-10">  MBBS</p>
            <hr class="h-px my-8  "></hr>

            <p className="mt-5">
              FCPS (ENT)
            </p>
            <hr class="h-px my-8  "></hr>

            <p className="mt-5">
              CME
            </p>
            <hr class="h-px my-8  "></hr>

          </div>
        </div>

      </div>
      <div class="border border-indigo-900  p-5 w-full mt-10 
       ">
        <h1 class='text-2xl font-bold mb-6 ml-5'>Experience</h1>
        <div className="flex flex-row p-5 gap-60">
          <div className="flex flex-col ">
            <h1 class='text-2xl'>Hospital</h1>
            <p className="mt-10"> Al-Shifa hospital, Islamabad</p>
            <hr class="h-px my-8  "></hr>

            <p className="mt-5 ">
              King edward university/mayo hospital, Lahore
            </p>
            <hr class="h-px my-8 "></hr>
            <p className="mt-5  ">
              King edward university/mayo hospital, Lahore
            </p>
            <hr class="h-px my-8 "></hr>

          </div>
          <div className="flex flex-col">
            <h1 class='text-2xl'>Position</h1>
            <p className="mt-10">  ENT Specialist</p>
            <hr class="h-px my-8  "></hr>

            <p className="mt-5">
              Assistant professor ENT
            </p>
            <hr class="h-px my-8  "></hr>

            <p className="mt-5">
              Senior Registrar
            </p>
            <hr class="h-px my-8  "></hr>

          </div>
        </div>

      </div>
      <h1 className="text-2xl font-bold mt-5 mb-5 ml-10">Professional Statement by Dr. Ahmed Alvi</h1>
      <h1 className="text-lg font-semibold mt-5 ml-10">Dr. Ahmed Alvi ENT,Islamabad Appointment details:</h1>
      <p className='ml-10 mt-4'>Dr. Ahmed Alvi is a qualified ENT in Islamabad with over 8 years of experience in the field. With numerous qualifications,
        the doctor provides the best treatment for all ENT related diseases. Dr. Ahmed Alvi has treated over 4000 patients
        through Health Genius and has 3876 reviews. You can book an appointment with Dr. Ahmed Alvi through Health Genius</p>
      <h1 className="text-lg font-semibold mt-5 ml-10">Role of ENT professionalist:</h1>
      <p className='ml-10 mt-4'>As Otolaryngologists, we diagnose, treat, and manage conditions affecting the ear, nose, and throat. From diagnosis to
        surgery, we prioritize personalized care, aiming for optimal outcomes and long term wellness. Through advocacy,
        education, and surgical expertise, we re committed to enhancing the quality of life for our patients.</p>
      <h1 className="text-lg font-semibold mt-5 ml-10">Experience:</h1>
      <p className='ml-10 mt-4'>Dr. Ahmed Alvi has and experience of about 8 years and an excellent patient satisfactory record.</p>
    </>
  );
}


export default DoctorProfile;