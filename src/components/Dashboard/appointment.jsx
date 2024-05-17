import Dashboard from "../../pages/Dashboard"
import Navbar from "../../pages/navbar"
function Appointment() {
    return (
        <>
            <Dashboard />
            <div class="p-4 sm:ml-64">
                <Navbar/>
                <div class="p-4 ">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-2xl">Appointment</h1>

                        <form class="">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg" placeholder="Search Mockups, Logos..." />
                            </div>
                        </form>


                    </div>
                    <div className="flex flex-col ">
                        <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5">
                            <div className="flex flex-row gap-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/public/assets/img/girl-1.jpg" alt="image description" />
                                <div>
                                    <h1 className="font-bold text-xl text-indigo-900">Andrew</h1>
                                    <p>2:00 am to 3:00 pm</p>
                                    <p>Today</p>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-bold text-xl text-green-600">Online</h1>
                                <p>Consultation</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5">
                            <div className="flex flex-row gap-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/public/assets/img/girl-1.jpg" alt="image description" />
                                <div>
                                    <h1 className="font-bold text-xl text-indigo-900">Andrew</h1>
                                    <p>2:00 am to 3:00 pm</p>
                                    <p>Today</p>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-bold text-xl text-green-600">Online</h1>
                                <p>Consultation</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5">
                            <div className="flex flex-row gap-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/public/assets/img/girl-1.jpg" alt="image description" />
                                <div>
                                    <h1 className="font-bold text-xl text-indigo-900">Andrew</h1>
                                    <p>2:00 am to 3:00 pm</p>
                                    <p>Today</p>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-bold text-xl text-green-600">Online</h1>
                                <p>Consultation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Appointment