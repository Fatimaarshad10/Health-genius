function Services() {
    return (
        <>
        {/* Service Section  */}
            <h1 className="text-indigo-900 text-5xl text-center mt-8">Services</h1>
            <h1 className="lg:text-6xl  text-3xl text-center font-semibold mt-3">Experienced in multiple<br />medical practices.</h1>
            <p className="text-center text-lg mt-3">Search for the specific need to find the right doctor for yourself.</p>
            <div class="flex flex-col lg:flex-row lg:justify-between mb-10 mr-10 lg:ml-14 mt-8">
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="bg-white shadow-lg p-4 w-72 h-72">
                        <img src="public/assets/img/service-1.png" alt="service-1" class="w-56 h-56 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">Top rated physicians</p>
                    </div>
                </div>
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="bg-white shadow-lg p-4 w-72 h-72">
                        <img src="public/assets/img/service-2.png" alt="service-2" class="w-56 h-56 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">Orthopedic surgeons</p>
                    </div>
                </div>
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="bg-white shadow-lg p-4 w-72 h-72">
                        <img src="public/assets/img/service-3.png" alt="service-3" class="w-56 h-56 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">Dermatologists</p>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="bg-white shadow-lg p-4 w-72 h-72">
                        <img src="public/assets/img/sevice-4.png" alt="service-4" class="w-56 h-56 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">Mental health professionals</p>
                    </div>
                </div>
            </div>
        {/* Why Health Genius Section  */}

            <h1 className="text-3xl lg:text-5xl font-bold text-indigo-900 ml-20">Why Health Genius? </h1>
            <div class="flex flex-col lg:flex-row gap-20 mb-10 mr-10 lg:ml-14 mt-14
            justify-center">
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="bg-white shadow-lg p-4 w-72 h-80">
                        <img src="public/assets/img/genius-1.png" alt="grnius-1" class="w-52 h-52 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">100% confidentional</p>
                        <p class="text-left text-xs lg:text-xs ">Our website lets you see board-certified doctors, psychiatrists, and providers in a secure, confidential, and HIPAA-compliant online experience.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="bg-white shadow-lg p-4 w-72 h-80">
                        <img src="public/assets/img/genius-2.png" alt="genius-2" class="w-52 h-52 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">4.5/5 rating</p>
                        <p class="text-left  text-xs lg:text-xs ">Thousands of patients left our clinical teams excellent reviews after receiving the care theyneeded online.</p>
                    </div>
                </div>
                <div class="flex flex-col items-center mb-4 lg:mb-0">
                    <div class="bg-white shadow-lg p-4 w-72 h-80">
                        <img src="public/assets/img/genius-3.png" alt="genius-3" class="w-52 h-52 mx-auto" />
                        <p class="text-center font-bold text-xs lg:text-sm mt-2">24/7 availability</p>
                        <p class="text-left text-xs lg:text-xs ">Our urgent care providers are here 24/7/365 for support. Or, book a visit with a therapist or psychiatrist night or day, during the week or on the weekend.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services