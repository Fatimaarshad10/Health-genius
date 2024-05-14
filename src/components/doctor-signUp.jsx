import React, { useState } from "react";
import { doctorRegister } from "../apis/doctor";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

const schema = yup.object({
    first_name: yup.string().required("required!"),
});

function DoctorRegister() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

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

    const onSubmit = (data) => {
        setLoading(true);
        const formData = new FormData();
        Object.keys(data).map((item) => {
            formData.append(item, data[item]);
        });
        formData.append("image", selectedImage);
        doctorRegister(formData, navigate, setLoading).then((result) => {
            if (result?.data?.status == 201) {
        navigate('/')

                toast.success(result?.data?.message);
            } else {
                toast.error(result?.error?.data?.message);
            }
        });
    };
    return (
        <section class="mt-10">

            <div className="flex flex-col lg:flex-row justify-center  ">
                <div className=" sm:w-auto sm:ml-10 lg:w-50 p-10 bg-indigo-200  rounded-lg">
                    <h2 className="text-3xl font-bold mb-4 text-indigo-900">Registration Form</h2>
                    <div className="flex flex-wrap mb-4">
                        <div className="flex flex-col">
                            <div className="mb-4 mr-4 w-full lg:w-52">
                                <input type="name"
                                    {...register("first_name")}
                                    id="firstName" placeholder="Enter your name" class=" p-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />

                            </div>
                            <div className="mb-4 mr-4 w-full lg:w-52">
                                <input type="name" id="lastName" placeholder="Enter your last name " class="p-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  " required />

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
                                        Upload Photograph
                                    </button>
                                </div>
                            </label>
                        </div>

                    </div>


                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5 bg-white" id="email" type="text" placeholder="E-mail Address" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="password" type="password" placeholder="Type Password" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5 bg-white" id="phone" type="tel" placeholder="Phone number" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-indigo-900">Professional Information</h3>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="license" type="text" placeholder="Medical License NO" />
                    </div>
                    <div className="flex mb-4">
                        <div className="mr-2 w-full lg:w-48">
                            <select id="field of expertise" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">
                                <option value="" disabled selected>Field of expertise</option>
                                <option value="1">Field 1</option>
                                <option value="2">Field 2</option>
                                <option value="3">Field 3</option>
                            </select>
                        </div>
                        <div className="mr-2 w-full lg:w-48">
                            <select id="Years" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                                <option value="" disabled selected>Years of experience</option>
                                <option value="1">Year 1</option>
                                <option value="2">Year 2</option>
                                <option value="3">Year 3</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="degree" type="text" placeholder="Medical Degree" />
                    </div>
                    <div className="mb-4">
                        <input className="shadow-sm bg-indigo-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white" id="affiliation" type="text" placeholder="Hospital Affiliation (if applicable)" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-indigo-900">Work Address</h3>
                    <div className="flex mb-4">
                        <div className="mr-2 w-full lg:w-32">
                            <select id="country" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                                <option value="" disabled selected>Country</option>
                                <option value="1">Country 1</option>
                                <option value="2">Country 2</option>
                                <option value="3">Country 3</option>
                            </select>
                        </div>
                        <div className="mr-2 w-full lg:w-32">
                            <select id="state" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                                <option value="" disabled selected>State</option>
                                <option value="1">State 1</option>
                                <option value="2">State 2</option>
                                <option value="3">State 3</option>
                            </select>
                        </div>
                        <div className="w-full lg:w-32">
                            <select id="city" className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5 bg-white">

                                <option value="" disabled selected>City</option>
                                <option value="1">City 1</option>
                                <option value="2">City 2</option>
                                <option value="3">City 3</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit"
                        onClick={handleSubmit(onSubmit)}
                        className="w-full rounded-lg bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900 hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">Sign up </button>

                </div>
            </div>
        </section>
    )
}

export default DoctorRegister;
