import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BookAppointment() {
  const [startDate, setStartDate] = useState(new Date());
  const user = useSelector((state) => state?.auth?.detail);
  console.log(user.availabilityTimes)
  function getNextDateForDay(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const targetDayIndex = daysOfWeek.indexOf(day);

    if (targetDayIndex === -1) {
        return null; // Invalid day name
    }

    const today = new Date();
    const currentDayIndex = today.getDay();

    let daysUntilNext = targetDayIndex - currentDayIndex;
    if (daysUntilNext <= 0) {
        daysUntilNext += 7;
    }

    const nextDate = new Date();
    nextDate.setDate(today.getDate() + daysUntilNext);

    return nextDate;
}

  return (

    <div className="flex flex-col items-center justify-center min-h-screen p-4 border">
      <p className="text-3xl font-bold text-center  mb-2">Get <span className="text-green-500">Confirmed</span> Appointment <br></br> Online </p>
      <div className="flex flex-col max-w-md w-full text-center">
        <div className="p-3 mt-2 border rounded-md shadow-sm bg-indigo-100 border-l-2 border-indigo-500 border-2 " >
          <h1 className="font-bold">(Video Consultation)</h1>
          <p>Rs 2000</p>
          <p className="text-indigo-900">Available today 2:00pm-5:00pm</p>
          <p className="text-green-900">Online</p>
        </div>
        <div className="p-3 mt-2 border rounded-md shadow-sm bg-indigo-100 " >
          <h1 className="font-bold">(Chughtai Medical Centre)</h1>
          <p>Rs 2000</p>
          <p className="text-indigo-900">Available today 2:00pm-5:00pm</p>
          <p className="text-green-900">DHA Phase 4</p>
        </div>


      </div>
      <div className="flex mt-5">
        <div className="mr-2 w-full lg:w-48">
          <select id="Specialist"
            className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">
            <option value="" disabled selected>Start Time</option>

            {user.availabilityTimes.map((data) => (
              <option value={data.start_time} >{data.start_time}</option>
            ))}


          </select>
        </div>
        <div>
          <div className="mr-2 w-full lg:w-48">
            <select id="Specialist"
              className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">
              <option value="" disabled selected>End Time</option>
              {user.availabilityTimes.map((data) => (
                <option value={data.end_time} >{data.end_time}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

      <div className="mt-5 lg:ml-3 ml-20 ">
    
       <div className="mr-2 w-full lg:w-48">
      <select id="day"
        className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">
        <option value="" disabled selected>Select Day</option>
        {user.availabilityTimes.map((data) => {
          const nextDate = getNextDateForDay(data.day);
          return (
            nextDate && (
              <option key={data.day} value={nextDate.toDateString()}>
                {nextDate.toDateString()}
              </option>
            )
          );
        })}
      </select>
    </div>
    <div className="flex justify-center">
            <button
              className="mt-5 rounded-md bg-indigo-900 px-4 py-2 text-md font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
            >
              <Link to="/book/appointment"> Book Video Consultation</Link>
             
            </button>
          </div>
      </div>
    </div>
  )
}
export default BookAppointment