function Search() {
    return (
        <>
            <div className="flex items-center mt-5">
                <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center ml-10">
                    <span className="text-white text-4xl font-serif font-bold">G</span>
                </div>
                <div>
                    <span className="text-3xl font-medium ml-6">Hello, Guest!</span>
                </div>
            </div>
            <div className="mt-5 ml-8">

                <form class="max-w-lg mx-auto">
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
            </div>
            <div className="px-6  lg:px-8  ml-10 mr-10 mt-5">
                <main className="grid lg:grid-cols-2 gap-10">
                    <div className="main pt-20">
                        <p className="text-2xl leading-relaxed text-gray-900 my-4 mx-8 uppercase">
                            Expert medical treatment
                        </p>
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold">We Follow a holistic approach to health care. </h1>
                        </div>
                        <p className="text-md leading-relaxed text-gray-900 my-8">
                            Bringing healthcare to your fingertips: Your vital gateway to medical experties and care.
                        </p>
                        <div className="flex">
                            <div className="flex items-center gap-x-3  md:flex-row ">
                                <button
                                    className=" rounded-md bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900
               hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 mr-4"
                                >
                                    Book an appointment
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="src/assets/img/main-1.png" className="h-auto w-90 lg:w-90" alt="doctor_img" />
                    </div>
                </main>
            </div>
        </>
    )
}
export default Search