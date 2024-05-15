import React, { useState } from "react";
import { doctorRegister } from "../apis/doctor";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { countries } from "countries-list";


const schema = yup.object({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    experience: yup.string().required("Experience is required"),
    license: yup.string().required("License is required"),
    expertise: yup.string().required("Expertise is required"),
    country: yup.string().required("Country is required"),
});

function DoctorRegister() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [availabilityTimes, setAvailabilityTimes] = useState([
        { day: "", start_time: "", end_time: "" }
    ]);

    const handleChangeData = (index, e) => {
        const { name, value } = e.target;
        const list = [...availabilityTimes];
        list[index][name] = value;
        setAvailabilityTimes(list);
    };

    const handleAdd = () => {
        setAvailabilityTimes([...availabilityTimes, { day: "", start_time: "", end_time: "" }]);
    };

    const handleRemove = index => {
        const list = [...availabilityTimes];
        list.splice(index, 1);
        setAvailabilityTimes(list);
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        setSelectedImage(fileUploaded);
    };
    const fileInputRef = React.useRef();

    const onSubmit = async (data) => {
        const formData = new FormData();
        Object.keys(data).map((item) => {
            formData.append(item, data[item]);
        });
        availabilityTimes.forEach((time, index) => {
            formData.append(`availabilityTimes[${index}][day]`, time.day);
            formData.append(`availabilityTimes[${index}][start_time]`, time.start_time);
            formData.append(`availabilityTimes[${index}][end_time]`, time.end_time);
        });
        formData.append("image", selectedImage);
        doctorRegister(formData);
    };
    return (
        <section class="mt-10">
            <div className="flex flex-col lg:flex-row justify-center">
                <div className=" sm:w-auto sm:ml-10 lg:w-50 p-10 bg-indigo-200  rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-900">Registration Form</h2>
                    <div className="flex flex-wrap mb-4">
                        <div className="flex flex-col">
                            <div className="mb-4 mr-4 w-full lg:w-80">
                                <input type="name"
                                    {...register("first_name")}
                                    id="first_name" placeholder="Enter your name" class=" p-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />

                            </div>
                            <div className="mb-4 mr-4 w-full lg:w-80">
                                <input type="name"
                                    {...register("last_name")} id="lastName" placeholder="Enter your last name " class="p-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />

                            </div>
                        </div>
                        <div className="mb-4 mr-4 w-full lg:w-52">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleChange}
                                    ref={fileInputRef}
                                    accept="image/*"
                                />
                                <div className="productimg">
                                    {selectedImage && (
                                        <img
                                            alt="not found"
                                            width={"100px"}
                                            height={"100px"}
                                            style={{
                                                margin: "auto",
                                            }}
                                            src={URL.createObjectURL(selectedImage)}
                                        />
                                    )}
                                </div>
                                <div className="imgbuttons">
                                    <button
                                        type="click"
                                        onClick={() => fileInputRef.current.click()}
                                        className="theme-btn"
                                    >
                                        Capture
                                    </button>
                                </div>
                            </label>
                        </div>

                    </div>


                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-black  text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5 bg-white" id="email" type="text" placeholder="E-mail Address"
                            {...register("email")} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300  text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="password" type="password" placeholder="Type Password"
                            {...register("password")} />
                    </div>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5 bg-white" id="phone" type="number" placeholder="Phone number"
                            {...register("phone_no")} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-indigo-900">Select Country</h3>

                    <div className=" mb-4">
                        <select    {...register("country")} id="country" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                            {Object.keys(countries).map((code) => (
                                <option key={code} value={code}>
                                    {countries[code].name}
                                </option>))
                            }

                        </select>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-indigo-900">Professional Information</h3>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="license" type="text" placeholder="Medical License NO"
                            {...register("license")} />
                    </div>
                    <div className="flex mb-4">
                        <div className="mr-2 w-full lg:w-48">
                            <select {...register("expertise")} id="field of expertise"
                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">
                                <option value="" disabled selected>Field of expertise</option>
                                <option value="1">Field 1</option>
                                <option value="2">Field 2</option>
                                <option value="3">Field 3</option>
                            </select>
                        </div>
                        <div className="mr-2 w-full lg:w-48">
                            <select   {...register("experience")} id="Years" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                                <option value="" disabled selected>Years of experience</option>
                                <option value="1">Year 1</option>
                                <option value="2">Year 2</option>
                                <option value="3">Year 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input    {...register("medical_degree")} className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="degree" type="text" placeholder="Medical Degree" />
                    </div>
                    <div className="mb-4">
                        <input   {...register("hospital_affiliation")} className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="affiliation" type="text" placeholder="Hospital Affiliation (if applicable)" />
                    </div>
                    <div className=" mb-4 ">

                        <h3 className="text-lg font-bold mb-2 text-indigo-900">
                            <button onClick={handleAdd} >Add Availability +
                            </button></h3>

                        {availabilityTimes.map((time, index) => (
                            <div key={index}>
                                <div className=" flex mt-5  ">
                                    <div className="lg:w-40 ">
                                        <select
                                            className="shadow-sm  bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white"
                                            name="day"
                                            value={time.day}
                                            onChange={e => handleChangeData(index, e)}
                                        >
                                            <option value="">Select Day</option>
                                            <option value="Monday">Monday</option>
                                            <option value="Tuesday">Tuesday</option>
                                            <option value="Wednesday">Wednesday</option>
                                            <option value="Thursday">Thursday</option>
                                            <option value="Friday">Friday</option>
                                            <option value="Saturday">Saturday</option>
                                            <option value="Sunday">Sunday</option>
                                        </select>
                                    </div>

                                    <div className="lg:w-40 ">

                                        <input
                                            type="time"
                                            name="start_time"
                                            className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white"
                                            value={time.start_time}
                                            onChange={e => handleChangeData(index, e)}
                                        />
                                    </div>

                                    <div className="mr-2 w-full lg:w-40">

                                        <input
                                            type="time"
                                            name="end_time"
                                            className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white"
                                            value={time.end_time}
                                            onChange={e => handleChangeData(index, e)}
                                        />
                                    </div>
                                    <div className="mr-2 w-full lg:w-20">
                                        {index !== 0 && (
                                            <button type="button"
                                                className="text-lg font-bold mb-2 text-indigo-900   w-full p-2.5 "

                                                onClick={() => handleRemove(index)}
                                            >
                                                X
                                            </button>
                                        )}
                                    </div>

                                </div>


                            </div>
                        ))}

                    </div>

                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="w-full rounded-lg bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Sign up </button>

                </div>
            </div>
        </section>
    )
}

export default DoctorRegister;
