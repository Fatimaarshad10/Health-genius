import Dashboard from "../../pages/Dashboard"
function Reports() {
    return (
        <>
            <Dashboard />
            <div class="p-4 sm:ml-64">
                <div class="p-4 ">
                    <div className="flex flex-row justify-between text-center">
                        <h1 className="font-bold text-2xl">Reports</h1>
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
                    <div className="flex flex-row justify-end">
                        <button type="button" class="mt-5 focus:outline-none text-white bg-indigo-900 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-indigo-900">Create</button>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5 ">
                            <div className="flex flex-row gap-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/src/assets/img/girl-1.jpg" alt="image description" />
                                <div>
                                    <h1 className="font-bold text-xl text-indigo-900 mt-5">Andrew</h1>

                                </div>
                            </div>
                            <div>
                                <button type="button" class=" mt-5 focus:outline-none text-white bg-indigo-900 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-indigo-900">Sent</button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col ">
                        <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5 ">
                            <div className="flex flex-row gap-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/src/assets/img/girl-1.jpg" alt="image description" />
                                <div>
                                    <h1 className="font-bold text-xl text-indigo-900 mt-5">Andrew</h1>

                                </div>
                            </div>
                            <div>
                                <button type="button" class=" mt-5 focus:outline-none text-white bg-indigo-900 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-indigo-900">Sent</button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col ">
                        <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5 ">
                            <div className="flex flex-row gap-5">
                                <img class="rounded-full w-20 h-20 object-cover" src="/src/assets/img/girl-1.jpg" alt="image description" />
                                <div>
                                    <h1 className="font-bold text-xl text-indigo-900 mt-5">Andrew</h1>

                                </div>
                            </div>
                            <div>
                                <button type="button" class=" mt-5 focus:outline-none text-white bg-indigo-900 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-indigo-900">Sent</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Reports