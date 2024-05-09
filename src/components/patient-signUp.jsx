function PatientRegister() {
    return (
        <>
        <section class="h-screen w-full bg-no-repeat bg-[url('../src/assets/img/background1.png')] ">
            <div className="flex justify-center items-center ">
                <form class="max-w-m mx-auto dark:bg-indigo-200 p-10 mt-20 rounded-lg ">
                    <h1 className="text-indigo-900 text-5xl text-center font-bold ">Create Account</h1>
                    <h1 className="text-center mt-5 mb-5">Sign up using your Email account</h1>
                    <div class="mb-5">
                        <input type="name" id="name" placeholder="Enter your name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />
                    </div>
                    <div class="mb-5">
                        <input type="email" id="email" placeholder="Enter your email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />
                    </div>
                    <div class="mb-5">
                        <input type="password" placeholder="Enter your password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />
                    </div>
                    <div class="mb-5">
                        <input type="password" placeholder="Enter your password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Sign up </button>
                </form>
            </div>
            </section>
        </>
    )
}
export default PatientRegister