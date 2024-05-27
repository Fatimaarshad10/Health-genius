import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { appointmentRegister } from "../../apis/appointment";

function BookAppointment() {
  const user = useSelector((state) => state?.auth?.detail);
  const { state } = useLocation();

  function getNextDateForDay(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const targetDayIndex = daysOfWeek.indexOf(day);

    if (targetDayIndex === -1) {
      return null; // Invalid day name
    }

    const today = new Date();
    const currentDayIndex = today.getDay();

    let daysUntilNext = targetDayIndex - currentDayIndex;
    if (daysUntilNext < 0) {
      daysUntilNext += 7;
    } else if (daysUntilNext === 0) {
      return today; // Return today's date if the selected day is today
    }

    const nextDate = new Date();
    nextDate.setDate(today.getDate() + daysUntilNext);

    return nextDate;
  }

  const patientId = user?._id;
  const doctorId = state?.doctor?._id;

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    setLoading(true);
    const appointmentData = {
      appointment: "online",
      day: selectedDay,
      start_time: startTime,
      end_time: endTime,
      doctorDetails: doctorId,
      patientDetails: patientId,
    };
    appointmentRegister(appointmentData, setLoading);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 border">
      <p className="text-3xl font-bold text-center  mb-2">
        Get <span className="text-green-500">Confirmed</span> Appointment <br />
        Online
      </p>
      <div className="flex flex-col max-w-md w-full text-center">
        <div className="p-3 mt-2 border rounded-md shadow-sm bg-indigo-100 border-l-2 border-indigo-500 border-2 ">
          <h1 className="font-bold">(Video Consultation)</h1>
          <p>Rs 2000</p>
          <p className="text-indigo-900">Available today 2:00pm-5:00pm</p>
          <p className="text-green-900">Online</p>
        </div>
        <div className="p-3 mt-2 border rounded-md shadow-sm bg-indigo-100 ">
          <h1 className="font-bold">(Chughtai Medical Centre)</h1>
          <p>Rs 2000</p>
          <p className="text-indigo-900">Available today 2:00pm-5:00pm</p>
          <p className="text-green-900">DHA Phase 4</p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="mr-2 w-full lg:w-48">
          <select
            id="start_time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white"
          >
            <option value="" disabled selected>
              Start Time
            </option>
            {state.doctor.availabilityTimes.map((data) => (
              <option value={data.start_time}>{data.start_time}</option>
            ))}
          </select>
        </div>
        <div>
          <div className="mr-2 w-full lg:w-48">
            <select
              id="end_time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white"
            >
              <option value="" disabled selected>
                End Time
              </option>
              {state.doctor.availabilityTimes.map((data) => (
                <option value={data.end_time}>{data.end_time}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:ml-3 ml-20 ">
        <div className="mr-2 w-full lg:w-48">
          <select
            id="day"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white"
          >
            <option value="" disabled selected>
              Select Day
            </option>
            {state.doctor.availabilityTimes.map((data) => {
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
            onClick={handleSubmit(onSubmit)}
            disabled={loading}
            className="mt-5 rounded-md bg-indigo-900 px-4 py-2 text-md font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
          >
            {loading ? "loading..." : "Book Video Consultation"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
