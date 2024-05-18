import Graph from './graph'
import Dashboard from "../../pages/Dashboard"
import Navbar from '../../pages/navbar'
import { useSelector } from "react-redux";

function DashboardDetail() {
  const user = useSelector((state) => state?.auth?.detail);
    return (
        <>
        <Dashboard/>

            <div class="p-4 sm:ml-64">
            <Navbar/>

                <div class="p-4 ">
                    <div className="flex lg:flex-row flex-col lg:gap-10 border p-5 ">
                        <div>
                            {/* <img class="rounded-full object-cover w-40 h-40" src={user?.image} alt="" /> */}
                        </div>
                        <div className="mt-5">
                            <h1 className='text-2xl font-bold text-indigo-900'>Welcome Back </h1>
                            <h1 className='text-sm'>{user.first_name} {user.last_name}</h1>
                            <p>{user.medical_degree} ({user.specialist})</p>
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
                                <img class=" object-cover w-60 h-60 absolute ml-20 hidden sm:block " src="/assets/img/dashboard.png" alt=""
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
                                        <img class="rounded-full object-cover w-20 h-20" src="/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/assets/img/message.png" alt="message" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="items-center rounded-full sm:flex lg:border lg:border-indigo-400 lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/assets/img/phone.png" alt="message" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="items-center lg:rounded-full sm:flex lg:border lg:border-indigo-400 lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/assets/img/phone.png" alt="message" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="items-center rounded-full sm:flex lg:border lg:border-indigo-400 lg:bg-indigo-200 gap-2 p-2">
                                        <img class="rounded-full object-cover w-20 h-20" src="/assets/img/girl-1.jpg" alt="" />
                                        <div class="flex flex-col sm:flex-row justify-between w-full gap-5">
                                            <div class="text-sm font-normal">
                                                Alaya
                                            </div>
                                            <div class="text-sm font-normal">
                                                <img class=" object-cover w-5" src="/assets/img/phone.png" alt="message" />

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
export default DashboardDetail