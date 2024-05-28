import { useEffect, useState } from "react";

import { getAppointment } from "../../apis/appointment";
import { useSelector } from 'react-redux';

function PatientProfile() {
    const details = useSelector((state) => state?.auth?.detail);
    const user = useSelector((state) => state?.auth?.user);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await getAppointment(`?patientDetails=${details._id}`);
                setAppointments(response?.data?.appointment || []);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [details._id]);
    return (
        <>
            <div class="p-4 sm:ml-55">
                <div class="p-4 ">
                    <div className="flex lg:flex-col flex-col lg:gap-10 border rounded p-5 bg-indigo-100 ">
                        <div className=" text-center">
                            <>
                                <div class=" rounded-full object-cover w-40 h-40 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-indigo-900 rounded-full ">
                                    <span class="font-medium text-white text-8xl">{user?.first_name.charAt(0).toUpperCase()}</span>
                                </div>
                            </>
                        </div>
                        <div className="mt-5 flex flex-col">
                            <h1 className='text-2xl font-bold text-indigo-900 text-center uppercase'>{user.first_name}</h1>
                            <h1 className='text-sm   text-center '>{user.email}</h1>
                            <div className="flex flex-row text-center  justify-center">
                                <button
                                    className=" md:bg-indigo-400 px-5 py-3 text-l font-semibold text-black 
                    hover:bg-indigo-50   dark:hover:text-indigo-300  mt-5  "

                                >
                                    Profile Setting
                                </button>
                            </div>

                        </div>

                    </div>




                    <div className=" p-6 mt-4 flex flex-col md:flex-row gap-5">

                        <div className="border border-gray-400 p-5 rounded">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-bold">Contact detail</h1>
                                <button className="text-3xl font-bold bg-indigo-400 text-white rounded-full w-10 h-10 flex justify-center  ml-2">
                                    +
                                </button>
                            </div>
                            <p className="mb-4 mt-5">Phone no :  +234242424242</p>
                            <p className="mb-4">Email:  testing@gmail.com</p>
                            <p className="mb-4">Addres :  Pakistan</p>

                            <hr />
                            <p className="mb-4 mt-5">Gender : Female</p>
                            <p className="mb-4">Date of birth : 12/02/2000 </p>
                        </div>
                        <div className="border border-gray-400 p-5 rounded">
                            <div className="flex justify-between items-center">
                                <h1 className="text-2xl font-bold">Medical Information</h1>
                                <button className="text-3xl font-bold bg-indigo-400 text-white rounded-full w-10 h-10 flex justify-center ml-2">
                                    +
                                </button>

                            </div>
                            <p className="mb-2 mt-5"><strong>Allergies:</strong> None</p>
                            <p className="mb-2"><strong>Medications:</strong> Aspirin (75mg daily), Simvastatin (20mg daily)</p>
                            <p className="mb-2"><strong>Medical History:</strong> Hypertension, Hyperlipidemia, GERD</p>
                            <p className="mb-2"><strong>Family Medical History:</strong> Father had heart disease</p>
                            <p className="mb-2"><strong>Immunizations:</strong> Last Tetanus shot: 01/15/2023</p>
                            <p className="mb-2"><strong>Vital Signs:</strong> BP: 120/80 mmHg, HR: 72 bpm, Temp: 98.6°F</p>
                            <p className="mb-2"><strong>Health Goals:</strong> Reduce LDL cholesterol levels, Increase physical activity</p>
                            <p className="mb-2"><strong>Emergency Contact:</strong> John Doe (Spouse) - +234567890123</p>
                        </div>


                        <div className="flex flex-col  ">
                            <h1 className="font-bold text-2xl">Appointments</h1>
                            {appointments.length === 0 ? (
                                <>
                            <h1>There is no appointment List of patient</h1>

                                </>
                            ):(
                                <>
                            {appointments.map(appointment => (
                            <div key={appointment._id} className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5">
                                <div className="flex flex-row gap-10">
                                   
                                    <img className="rounded-full w-20 h-20 object-cover" src={appointment.doctorDetails.image} alt="image description" />

                                    <div>
                                        <h1 className="font-bold text-xl text-indigo-900">{appointment.doctorDetails.first_name}</h1>
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
                        </>
                    )}
                          
                          
                           
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


export default PatientProfile;