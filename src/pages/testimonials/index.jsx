function Testimonials() {
    return (
        <>
            <h1 className="text-indigo-900 text-3xl text-center mt-20">TESTIMONIAILS</h1>
            <h1 className="lg:text-4xl  text-3xl text-center font-semibold mt-3">What Our Patients Says</h1>
            <div class="flex flex-col lg:flex-row lg:justify-center mb-14 mr-10 lg:ml-14 mt-8 gap-20">
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="p-4 w-72 h-72 ">
                        <a href="#" class="block max-w-sm p-6 rounded-lg bg-indigo-100 dark:border-indigo-200 dark:hover:bg-indigo-200">
                            <p class="font-normal text-gray-600 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div class="flex flex-col lg:flex-row gap-5 mt-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/assets/img/girl-1.jpg" alt="image description" />
                                <div className="flex flex-col ">
                                    <h1 class="font-bold text-xs lg:text-xl mt-2 text-indigo-900">Aliha</h1>
                                    <p class="text-gray-600 ">Student of CS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="p-4 w-72 h-72 ">
                        <a href="#" class="block max-w-sm p-6 rounded-lg bg-indigo-100 dark:border-indigo-200 dark:hover:bg-indigo-200">
                            <p class="font-normal text-gray-600 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div class="flex flex-col lg:flex-row gap-5 mt-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/assets/img/boy-1.jpg" alt="image description" />
                                <div className="flex flex-col ">
                                    <h1 class="font-bold text-xs lg:text-xl mt-2 text-indigo-900">Aliha</h1>
                                    <p class="text-gray-600">Student of CS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="p-4 w-72 h-72 ">
                        <a href="#" class="block max-w-sm p-6 rounded-lg bg-indigo-100 dark:border-indigo-200 dark:hover:bg-indigo-200">
                            <p class="font-normal text-gray-600 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div class="flex flex-col lg:flex-row gap-5 mt-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/assets/img/boy-2.jpg" alt="image description"
                                />
                                <div className="flex flex-col ">
                                    <h1 class="font-bold text-xs lg:text-xl mt-2 text-indigo-900">Aliha</h1>
                                    <p class="text-gray-600 ">Student of CS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-center">
                <div class="w-4/5 h-auto p-4 text-center bg-gray-500 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-3xl mt-5 font-bold text-white dark:text-white">Get in touch to book your<br /> first appointment.</h5>
                    <p class="mb-5 text-base mt-5 text-white sm:text-lg dark:text-gray-400">Booking an appointment is quick and simple</p>
                    <div class="items-center justify-center">
                        <input type="text" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-max p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" placeholder="Enter your name" />
                        <input type="text" class="bg-gray-100 border ml-2 border-gray-300 text-gray-900 text-sm rounded-lg  w-max p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" placeholder="Enter your email" />
                        <button
                            class="mt-2 sm:mt-0 ml-0 sm:ml-4 rounded-md bg-indigo-900 px-3 py-3 text-lg font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                        >
                            Book an appointment
                        </button>

                    </div>
                </div>
            </div>
            <div className="px-6  lg:px-8 ml-10 mr-10 mt-12">
                <main className="grid lg:grid-cols-2 gap-10">
                    <div className="flex justify-center">
                        <img src="/assets/img/doctor-1.png" className="h-fit w-fit lg:w-90 mt-8" alt="about" />
                    </div>
                    <div className="main pt-8 flex flex-col items-center justify-center">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-indigo-900 text-center">ARE YOU A DOCTOR</h1>
                        </div>
                        <p className="text-lg leading-relaxed text-indigo-900 my-8 text-center">
                            Get connected with us through online baking.
                        </p>
                        <div className="flex justify-center">
                            <div className="flex items-center gap-x-3 md:flex-row ">
                                <button
                                    className=" rounded-md bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900
                                 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 mr-4"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default Testimonials