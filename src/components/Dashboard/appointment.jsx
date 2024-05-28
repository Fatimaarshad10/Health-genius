import { useEffect, useState } from "react";
import Dashboard from "../../pages/Dashboard";
import Navbar from "../../pages/navbar";
import { getAppointment } from "../../apis/appointment";
import { useSelector } from 'react-redux';

function Appointment() {
    const details = useSelector((state) => state?.auth?.detail);
    const [appointments, setAppointments] = useState([]);
    
    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await getAppointment(`?doctorDetails=${details._id}`);
                setAppointments(response?.data?.appointment || []);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };
        
        fetchAppointments();
    }, [details._id]);

    return (
        <>
            <Dashboard />
            <div class="p-4 sm:ml-64">
                <Navbar />
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
                        {appointments.map(appointment => (
                            <div key={appointment._id} className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5">
                                <div className="flex flex-row gap-10">
                                <div class="w-12 h-12 relative">
                                                                    <div class="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-indigo-900 rounded-full ">
                                                                        <span class="font-medium text-white ">{appointment.patientDetails.name.charAt(0).toUpperCase()}</span>
                                                                    </div>

                                                                </div>
                                    <div>
                                        <h1 className="font-bold text-xl text-indigo-900">{appointment.patientDetails.name}</h1>
                                        <p>{appointment.start_time} to {appointment.end_time}</p>
                                        <p>{appointment.day}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl text-green-600">{appointment.appointment}</h1>
                                    <p>Consultation</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appointment;
