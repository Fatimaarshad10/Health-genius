function DoctorRegister() {
    return (
        <section class="mt-10">

        <div className="flex flex-col lg:flex-row justify-center  ">
            {/* <div className="lg:w-50 bg-indigo-100">
                <div className="p-8">
                    <h1 className="text-3xl text-indigo-900 font-bold">Health
                        <span className="text-3xl font-bold text-black">Genius</span>
                    </h1>
                    <p className="text-white text-sm mt-2 ml-2">Go through the registration form with us easily</p>
                </div>
                <img src="" alt="Health Genius" className="mt-auto" />
            </div> */}
            <div className=" sm:w-auto sm:ml-10 lg:w-50 p-10 bg-indigo-200  rounded-lg">
                <h2 className="text-3xl font-bold mb-4 text-indigo-900">Registration Form</h2>
                <div className="flex flex-wrap mb-4">
                    <div className="flex flex-col">
                    <div className="mb-4 mr-4 w-full lg:w-52">
                    <input type="name" id="firstName" placeholder="Enter your name" class=" p-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />

                    </div>
                    <div className="mb-4 mr-4 w-full lg:w-52">
                    <input type="name" id="lastName" placeholder="Enter your last name " class="p-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />

                    </div>
                    </div>
                    <div className="mb-4 mr-4 w-full lg:w-52">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="#" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-center text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    
                </div>


                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5 bg-white" id="email" type="text" placeholder="E-mail Address" />
                </div>
                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5 bg-white" id="phone" type="tel" placeholder="Phone number" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-indigo-900">Professional Information</h3>
                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="license" type="text" placeholder="Medical License NO" />
                </div>
                <div className="flex mb-4">
                    <div className="mr-2 w-full lg:w-48">
                        <select id="field of expertise" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">
                            <option value="" disabled selected>Field of expertise</option>
                            <option value="1">Field 1</option>
                            <option value="2">Field 2</option>
                            <option value="3">Field 3</option>
                        </select>
                    </div>
                    <div className="mr-2 w-full lg:w-48">
                    <select id="Years" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                            <option value="" disabled selected>Years of experience</option>
                            <option value="1">Year 1</option>
                            <option value="2">Year 2</option>
                            <option value="3">Year 3</option>
                        </select>
                    </div>
                </div>
                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="degree" type="text" placeholder="Medical Degree" />
                </div>
                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="affiliation" type="text" placeholder="Hospital Affiliation (if applicable)" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-indigo-900">Work Address</h3>
                <div className="flex mb-4">
                    <div className="mr-2 w-full lg:w-32">
                    <select id="country" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                            <option value="" disabled selected>Country</option>
                            <option value="1">Country 1</option>
                            <option value="2">Country 2</option>
                            <option value="3">Country 3</option>
                        </select>
                    </div>
                    <div className="mr-2 w-full lg:w-32">
                    <select id="state" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                            <option value="" disabled selected>State</option>
                            <option value="1">State 1</option>
                            <option value="2">State 2</option>
                            <option value="3">State 3</option>
                        </select>
                    </div>
                    <div className="w-full lg:w-32">
                    <select id="city" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                            <option value="" disabled selected>City</option>
                            <option value="1">City 1</option>
                            <option value="2">City 2</option>
                            <option value="3">City 3</option>
                        </select>
                    </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-indigo-900">Others</h3>
                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="password" type="password" placeholder="Type Password" />
                </div>
                <div className="mb-4">
                    <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="confirm-password" type="password" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Sign up </button>

            </div>
        </div>
        </section>
    )
}

export default DoctorRegister;
