function Login() {
    return (
        <div className="flex flex-col lg:flex-row w-screen h-screen">
            <div className="flex justify-center items-center w-full h-full"
           >
                <div className="flex flex-col lg:flex-row justify-center items-center w-11/12 lg:w-1/2 p-8 
               ">
                    <img src="src/assets/img/plant.png" className="w-30 h-12 lg:w-32" alt="doctor_img" />
                    <h1 className="text-3xl text-indigo-900 font-bold">Health
                        <span className="text-3xl font-bold text-black">Genius</span>
                    </h1>
                </div>
            </div>
            <div className="flex flex-col w-full h-full bg-indigo-200 ">
                <p className="text-white mt-20 text-2xl pl-5">Welcome to Health Genius</p>
                <h1 className="text-3xl lg:text-5xl font-bold text-indigo-900 mt-6 pl-5">Login to your <br /> account</h1>
                <form className="max-w-md w-full p-4 mt-8">
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
