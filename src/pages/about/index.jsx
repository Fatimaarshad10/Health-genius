function About() {
    return (
        <>
            <div className="px-6  lg:px-8 ml-10 mr-10">
                <main className="grid lg:grid-cols-2 gap-10">
                    <div className="flex justify-center">
                        <img src="src/assets/img/about.png" className="h-auto w-90 lg:w-90 mt-8" alt="about" />
                    </div>
                    <div className="main pt-8">
                        <p className="text-2xl leading-relaxed text-indigo-900 font-bold">
                            About Us
                        </p>
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold">Empowering Healthcare: Our Vision and Services </h1>
                        </div>
                        <p className="text-md leading-relaxed text-gray-900 my-8">
                            At our Online Medical Hospital, we're committed to
                            revolutionizing healthcare access. Leveraging advanced
                            technologies, we bridge the gap between patients and
                            medical expertise. Our experienced team provides high-quality, compassionate care tailored to each individual's
                            needs.<br />
                            We offer a range of services from virtual consultations to
                            prescription management. We're not just providers; we're
                            advocates for your well-being, fostering a healthier, happier
                            community, one click at a time.
                        </p>
                        <div className="flex">
                            <div className="flex items-center gap-x-3  md:flex-row ">
                                <button
                                    className=" rounded-md bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900
                                 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 mr-4"
                                >
                                    Book an appointment
                                </button>
                                <button
                                    className=" rounded-md px-5 py-3 font-semibold text-indigo-900 text-xl border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white hover:border-white"
                                >
                                    About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default About