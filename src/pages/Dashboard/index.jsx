import Graph from '../../components/Dashboard/graph'
function Dashboard() {
    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-indigo-50 dark:bg-indigo-100">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="#" class="flex items-center p-2 text-indigo-200 rounded-lg dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span class="ms-3 text-indigo-900 font-bold text-xl">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-indigo-200 rounded-lg dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                                </svg>
                                <span class="flex-1 ms-3 text-indigo-900 font-bold text-xl">Appointment</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-indigo-200 rounded-lg dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span class="flex-1 ms-3 text-indigo-900 font-bold text-xl">Chats</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-indigo-200 rounded-lg dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <span class="flex-1 ms-3 text-indigo-900 font-bold text-xl">Reports</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-indigo-200 rounded-lg dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-500 group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                                    <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
                                </svg>

                                <div></div>
                                <span class="flex-1 ms-3 text-indigo-900 font-bold text-xl">Log out </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class="p-4 sm:ml-64">
                <div class="p-4 ">
                    <div className="flex lg:flex-row flex-col lg:gap-10 border p-5 ">
                        <div>
                            <img class="rounded-full object-cover w-40 h-40" src="/src/assets/img/girl-1.jpg" alt="" />
                        </div>
                        <div className="mt-5">
                            <h1 className='text-2xl font-bold text-indigo-900'>Welcome Back </h1>
                            <h1 className='text-sm'>Dr. Kashmala Khan</h1>
                            <p>MD, DM (Cardiology), FACC, FESC</p>
                        </div>
                        <div>
                            <a href="#" class="block max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-indigo-200 lg:ml-10 mt-10 lg:mt-0">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-900 dark:text-indigo">You have 12 Appointments today</h5>

                                <p >Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.</p>
                            </a>
                        </div>
                    </div>

                    <div className="mt-5  p-5 relative">
                        <h1 className="font-bold text-xl">Report</h1>
                        <div className="flex lg:flex-row gap-3 flex-col">
                            <div className="flex lg:flex-row mt-5 gap-8 flex-col ">
                                <div className="border rounded-lg  border-gray-400 p-4 lg:h-20 bg-indigo-300">
                                    <div className="flex flex-row ">
                                        <p className='font-bold text-sm text-indigo-900'>Patients</p>
                                    </div>
                                    <h1 className="mt-2 font-bold text-2xl text-center">473</h1>
                                </div>
                                <div className="border rounded-lg  border-gray-400 p-4 lg:h-20 bg-indigo-300 ">
                                    <div className="flex lg:flex-row ">
                                        <p className='font-bold text-sm text-indigo-900'>Consultations</p>
                                    </div>
                                    <h1 className="mt-2 font-bold text-2xl text-center">249</h1>
                                </div>
                                <div className="border rounded-lg  border-gray-400 p-4 lg:h-20 bg-indigo-300 ">

                                    <div className="flex flex-row">
                                        <p className='font-bold text-sm text-indigo-900'>Injuct</p>
                                    </div>
                                    <h1 className="mt-2 font-bold text-2xl text-center">119</h1>
                                </div>
                                <div className="border rounded-lg  border-gray-400 p-4 lg:h-20 bg-indigo-300 ">

                                    <div className="flex flex-row ">
                                        <p className='font-bold text-sm text-indigo-900'>Surgerie</p>
                                    </div>
                                    <h1 className="mt-2 font-bold text-2xl text-center">190</h1>
                                </div>
                            </div>
                            <div>
                                <img class=" object-cover w-60 h-60 absolute ml-20 hidden sm:block " src="/src/assets/img/dashboard.png" alt=""
                                    style={{ marginTop: "-90px" }} />

                            </div>
                        </div>
                    </div>
                    <Graph />
                    <div className="mt-10">
                        <div class="p-4 border border-gray-100 rounded-lg   ">
                            <h1 class="text-xl font-bold">Recents</h1>

                            <ol class="flex justify-center gap-10 mt-10">
                                <li>
                                    <a href="#" class="items-center rounded-full sm:flex lg:border lg:border-indigo-400  lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/src/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/src/assets/img/message.png" alt="message" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="items-center rounded-full sm:flex lg:border lg:border-indigo-400 lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/src/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/src/assets/img/phone.png" alt="message" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="items-center lg:rounded-full sm:flex lg:border lg:border-indigo-400 lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/src/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/src/assets/img/phone.png" alt="message" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="items-center rounded-full sm:flex lg:border lg:border-indigo-400 lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/src/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/src/assets/img/phone.png" alt="message" />

                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}
export default Dashboard