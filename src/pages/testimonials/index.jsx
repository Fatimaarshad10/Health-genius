function Testimonials() {
    return (
        <>
            <h1 className="text-indigo-900 text-3xl text-center mt-20">TESTIMONIAILS</h1>
            <h1 className="lg:text-4xl  text-3xl text-center font-semibold mt-3">What Our Patients Says</h1>
            <div class="flex flex-col lg:flex-row lg:justify-center mb-10 mr-10 lg:ml-14 mt-8 gap-20">
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="p-4 w-72 h-72 ">
                        <a href="#" class="block max-w-sm p-6 rounded-lg bg-indigo-100 dark:border-indigo-200 dark:hover:bg-indigo-200">
                            <p class="font-normal text-gray-600 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <div class="flex flex-col lg:flex-row gap-5 mt-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="src/assets/img/girl-1.jpg" alt="image description" />
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
                                <img class="rounded-full w-20 h-20 object-cover" src="src/assets/img/boy-1.jpg" alt="image description" />
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
                                <img class="rounded-full w-20 h-20 object-cover" src="src/assets/img/boy-2.jpg" alt="image description"
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
        </>
    )
}
export default Testimonials