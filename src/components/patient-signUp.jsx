function PatientRegister() {
    return (
        <>
        <h1 className="text-indigo-900 text-5xl text-center font-bold">Create Account</h1>
        <h1 className="text-center mt-5 mb-5">Sign up using your Email account</h1>
            <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Enter Your Name" required />
                </div>
                <div class="mb-5">
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Enter your E-mail account" required />
                </div>
                <div class="mb-5">
                    <input type="password" placeholder="Enter your password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" required />
                </div>
                <div class="mb-5">
                    <input type="password" placeholder="Confirm your password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" required />
                </div>
                <button type="submit" class="text-white bg-indigo-900  hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold text-lg rounded-full  px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Login</button>
            </form>
        </>
    )
}
export default PatientRegister