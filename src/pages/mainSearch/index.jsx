function MainSearch() {
    return (
        <>
            <div>
                <h1 className="text-4xl mt-10 ml-20">Top results for your search (Dermatologist)</h1>
            </div>
            {/* Pre :  Every button will have a functionality */}
            <div className="flex items-center gap-x-5 flex-col md:flex-row mt-10 ml-20 ">
                <form class="max-w-lg ">
                    <div class="flex">
                        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900  dark:text-white"></label>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center  py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                            <span className="mr-4"><svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.5" viewBox="0 0 384 512">
                                <path fill="#312e81" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg></span>
                            Enter City<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Faisalabad</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Lahore</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Karachi</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Islamabad</button>
                                </li>
                            </ul>
                        </div>
                        <div class="relative w-full">
                            <input type="search" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-indigo-400 focus:border-indigo-400 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-900" placeholder="Search" required />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-indigo-900 rounded-e-lg border hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 dark:focus:ring-indigo-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
                <button
                    className="rounded md:bg-indigo-400 font-semibold text-black 
                    hover:bg-indigo-50 dark:hover:text-indigo-300 p-2"
                >
                    Clear filters
                </button>
                <button
                    className="rounded md:bg-indigo-900 p-2 font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                >
                    Fee upto 500
                </button>
                <button
                    className="rounded md:bg-indigo-900 p-2 font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                >
                    DR. near me
                </button>
                <button
                    className="rounded md:bg-indigo-900 p-2  font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                >
                    Top rated
                </button>
                <div className=" lg:w-30">
                    <select id="field of expertise" className="rounded p-2 md:bg-indigo-900  font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300 ">
                        <option value="" disabled selected>Choose Time</option>
                        <option value="1">Field 1</option>
                        <option value="2">Field 2</option>
                        <option value="3">Field 3</option>
                    </select>
                </div>
                <div className="lg:w-30">
                    <select id="field of expertise" className="rounded p-2 md:bg-indigo-900  font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300 ">
                        <option value="" disabled selected>Fee Range</option>
                        <option value="1">Field 1</option>
                        <option value="2">Field 2</option>
                        <option value="3">Field 3</option>
                    </select>
                </div>
            </div>
            <div>
                {/* Pre : Here i will add the map where show the list of doctor according to the search */}
                <div class="bg-white border border-gray-200 rounded-lg mt-10 ml-20 mr-20 p-10">
                    <div className="flex lg-flex-row ">
                        <div>
                            <img class="rounded-full object-cover w-40 h-40" src="src/assets/img/girl-1.jpg" alt="" />
                        </div>
                        <div className="lg:w-30 mr-10 ml-10">
                            <h2 className="text-indigo-900 font-bold text-3xl">Dr. Zafar Ali</h2>
                            <p className="font-bold">Dermatologist</p>
                            <p className="text-sm w-60">MBBS, CRCP, D.DERM(Thailand), Diploma in Dermat-Surgery(Bangkok), Research Course(UK)</p>
                            <div className="flex lg:flex-row gap-5 mt-10">
                                {/* review */}
                                <div className="">
                                    <h2 className="text-indigo-900 font-bold ">Review</h2>
                                    <p>2375</p>
                                </div>
                                {/* Experience */}
                                <div className="">
                                    <h2 className="text-indigo-900 font-bold ">Experience</h2>
                                    <p>27 Years</p>
                                </div>
                                {/* Satisfaction */}
                                <div className="">
                                    <h2 className="text-indigo-900 font-bold ">Satisfaction</h2>
                                    <p>97%</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row gap-5 ">
                            <button
                                className="rounded md:bg-indigo-900 w-60 h-20 text-l font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                            >
                                Video Call
                            </button>
                            <button
                                className="rounded md:bg-indigo-900 w-60 h-20 text-l font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                            >
                                View Timings
                            </button>
                        </div>

                    </div>
                    <div className="flex lg-flex-row gap-10 mt-10 justify-center">
                        {/* Card no 1  */}
                        <div className="border border-gray-200 p-5">
                            <h2 className="text-indigo-900 text-2xl">Video consultation</h2>
                            <p>Available today</p>
                            <p className="mt-5">Rs. 1000</p>
                        </div>
                        {/* Card no 2  */}
                        <div className="border border-gray-200 p-5">
                            <h2 className="text-indigo-900 text-2xl">Nishtar Hospital, Multan</h2>
                            <p>Available today</p>
                            <p className="mt-5">Free</p>
                        </div>
                        {/* Card no 3  */}
                        <div className="border border-gray-200 p-5">
                            <h2 className="text-indigo-900 text-2xl">City Hospital, Multan</h2>
                            <p>Available tomorrow</p>
                            <p className="mt-5">Rs. 3000</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainSearch