import React, { useState, useEffect } from "react";
import Dashboard from "../../pages/Dashboard";
import Navbar from "../../pages/navbar";
import { getReport, reportRegister , deleteReport} from "../../apis/report";
import { useSelector } from 'react-redux';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function Reports() {
    const details = useSelector((state) => state?.auth?.detail);
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await getReport();
                setReport(response?.data?.Report || []);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        fetchReport();
    }, [details._id ]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const schema = yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        dateOfBirth: yup.date().required("Date of Birth is required"),
        city: yup.string().required("City is required"),
        streetAddress: yup.string().required("Street Address is required"),
        phoneNumber: yup.string().required("Phone Number is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        height: yup.number().optional(),
        weight: yup.number().optional(),
        underMedicalCare: yup.boolean().required("This field is required"),
        drugAllergies: yup.boolean().required("This field is required"),
        foodEnvironmentalAllergies: yup.boolean().required("This field is required"),
        tuberculosisHistory: yup.boolean().required("This field is required"),
        mentalHealthCare: yup.boolean().required("This field is required"),
        restrictedEating: yup.boolean().required("This field is required"),
        familyHealthHistory: yup.object({
            mother: yup.object({
                age: yup.number().optional(),
                inGoodHealth: yup.boolean().optional(),
                knownHealthProblems: yup.string().optional(),
                alive: yup.boolean().optional(),
            }).optional(),
            father: yup.object({
                age: yup.number().optional(),
                inGoodHealth: yup.boolean().optional(),
                knownHealthProblems: yup.string().optional(),
                alive: yup.boolean().optional(),
            }).optional(),
        }).optional(),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            data.doctorId = details._id;
            await reportRegister(data , setLoading);
            reset();
            const response = await getReport();
            setReport(response?.data?.Report || []);
        } catch (error) {
            console.error('Error creating report:', error);
            setLoading(false);
        }
    };
    const handleDelete = async (id) => {
        try {
            // Delete report
            await deleteReport(id);
            // Display success message
            toast.success('Report deleted successfully.');
            // Remove the deleted report from the report state
            setReport(prevReport => prevReport.filter(report => report._id !== id));
        } catch (error) {
            console.error('Error deleting report:', error);
            toast.error('Failed to delete report.');
        }
    };
    return (
        <>
            <Dashboard />
            <div className="p-4 sm:ml-64">
                <Navbar />
                <div className="p-4">
                    <div className="flex flex-row justify-between text-center">
                        <h1 className="font-bold text-2xl">Reports</h1>
                        <button onClick={toggleModal} className="block text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Create
                        </button>
                        {showModal && (
                            <div className="fixed top-0 right-0 left-0 bottom-0 bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
                                <div className="bg-white p-10 rounded-lg max-w-lg w-full max-h-full overflow-y-auto relative">
                                    <h3 className="text-2xl font-bold mb-4 text-indigo-900">Create Patient Report</h3>
                                    <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <form >
                                        <div className="mb-4">
                                            <input
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                type="text"
                                                placeholder="First Name"
                                                {...register("firstName")}
                                            />
                                            {errors.firstName && <p className="text-red-600">{errors.firstName.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                type="text"
                                                placeholder="Last Name"
                                                {...register("lastName")}
                                            />
                                            {errors.lastName && <p className="text-red-600">{errors.lastName.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                type="text"
                                                placeholder="E-mail Address"
                                                {...register("email")}
                                            />
                                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <select
                                                {...register("city")}
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-300 focus:border-indigo-500 block w-full p-2.5"
                                            >
                                                <option value="">Select City</option>
                                                <option value="Faisalabad">Faisalabad</option>
                                                <option value="Lahore">Lahore</option>
                                                <option value="Karachi">Karachi</option>
                                                <option value="Islamabad">Islamabad</option>
                                            </select>
                                            {errors.city && <p className="text-red-600">{errors.city.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                type="date"
                                                placeholder="Date of Birth"
                                                {...register("dateOfBirth")}
                                            />
                                            {errors.dateOfBirth && <p className="text-red-600">{errors.dateOfBirth.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                type="text"
                                                placeholder="Street Address"
                                                {...register("streetAddress")}
                                            />
                                            {errors.streetAddress && <p className="text-red-600">{errors.streetAddress.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                className="shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                type="text"
                                                placeholder="Phone Number"
                                                {...register("phoneNumber")}
                                            />
                                            {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>}
                                        </div>
                                        <div className="flex flex-wrap mb-4 gap-3">
                                            <div className="flex items-center mb-2">
                                                <input
                                                    {...register("underMedicalCare")}
                                                    type="checkbox"
                                                    id="underMedicalCare"
                                                    className="mr-2 h-5 w-5"
                                                />
                                                <label htmlFor="underMedicalCare" className="text-sm">Under Medical Care</label>
                                            </div>
                                            {errors.underMedicalCare && <p className="text-red-600">{errors.underMedicalCare.message}</p>}
                                            <div className="flex items-center mb-2">
                                                <input
                                                    {...register("drugAllergies")}
                                                    type="checkbox"
                                                    id="drugAllergies"
                                                    className="mr-2 h-5 w-5"
                                                />
                                                <label htmlFor="drugAllergies" className="text-sm">Drug Allergies</label>
                                            </div>
                                            {errors.drugAllergies && <p className="text-red-600">{errors.drugAllergies.message}</p>}
                                            <div className="flex items-center mb-2">
                                                <input
                                                    {...register("foodEnvironmentalAllergies")}
                                                    type="checkbox"
                                                    id="foodEnvironmentalAllergies"
                                                    className="mr-2 h-5 w-5"
                                                />
                                                <label htmlFor="foodEnvironmentalAllergies" className="text-sm">Food Environmental Allergies</label>
                                            </div>
                                            {errors.foodEnvironmentalAllergies && <p className="text-red-600">{errors.foodEnvironmentalAllergies.message}</p>}
                                            <div className="flex items-center mb-2">
                                                <input
                                                    {...register("tuberculosisHistory")}
                                                    type="checkbox"
                                                    id="tuberculosisHistory"
                                                    className="mr-2 h-5 w-5"
                                                />
                                                <label htmlFor="tuberculosisHistory" className="text-sm">Tuberculosis History</label>
                                            </div>
                                            {errors.tuberculosisHistory && <p className="text-red-600">{errors.tuberculosisHistory.message}</p>}
                                            <div className="flex items-center mb-2">
                                                <input
                                                    {...register("mentalHealthCare")}
                                                    type="checkbox"
                                                    id="mentalHealthCare"
                                                    className="mr-2 h-5 w-5"
                                                />
                                                <label htmlFor="mentalHealthCare" className="text-sm">Mental Health Care</label>
                                            </div>
                                            {errors.mentalHealthCare && <p className="text-red-600">{errors.mentalHealthCare.message}</p>}
                                            <div className="flex items-center mb-2">
                                                <input
                                                    {...register("restrictedEating")}
                                                    type="checkbox"
                                                    id="restrictedEating"
                                                    className="mr-2 h-5 w-5"
                                                />
                                                <label htmlFor="restrictedEating" className="text-sm">Restricted Eating</label>
                                            </div>
                                            {errors.restrictedEating && <p className="text-red-600">{errors.restrictedEating.message}</p>}
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2 text-indigo-900">Mother's Information:</h3>
                                            <div className="flex flex-col">
                                                <input
                                                    {...register("familyHealthHistory.mother.age")}
                                                    className="mb-2 shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                    type="number"
                                                    placeholder="Age"
                                                />
                                                <input
                                                    {...register("familyHealthHistory.mother.knownHealthProblems")}
                                                    className="mb-2 shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                    type="text"
                                                    placeholder="Known Health Problems"
                                                />
                                                <div className="flex flex-row mt-5 gap-5 ml-2">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            {...register("familyHealthHistory.mother.inGoodHealth")}
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">In Good Health</span>
                                                    </label>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            {...register("familyHealthHistory.mother.alive")}
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">Alive</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="text-lg font-bold mb-2 text-indigo-900">Father's Information:</h3>
                                            <div className="flex flex-col">
                                                <input
                                                    {...register("familyHealthHistory.father.age")}
                                                    className="mb-2 shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                    type="number"
                                                    placeholder="Age"
                                                />
                                                <input
                                                    {...register("familyHealthHistory.father.knownHealthProblems")}
                                                    className="mb-2 shadow-sm bg-indigo-200 border border-gray-300 text-black text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-300 block w-full p-2.5"
                                                    type="text"
                                                    placeholder="Known Health Problems"
                                                />
                                                <div className="flex flex-row mt-5 gap-5 ml-2">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            {...register("familyHealthHistory.father.inGoodHealth")}
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">In Good Health</span>
                                                    </label>
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            {...register("familyHealthHistory.father.alive")}
                                                            type="checkbox"
                                                            className="form-checkbox h-5 w-5 text-indigo-600"
                                                        />
                                                        <span className="ml-2 text-sm text-gray-700">Alive</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-7 flex justify-center">
                                            <button

                                                // type="submit"
                                                onClick={handleSubmit(onSubmit)}
                                                disabled={loading}
                                                className="text-white bg-indigo-900 hover:bg-indigo-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                                            >
                                                {loading ? "Sending" : "Send to the patient"}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={toggleModal}
                                                className="text-white bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                    {report.map((data) => (
                        <div className="flex flex-col" key={data._id}>
                            <div className="flex flex-row justify-between bg-indigo-200 p-5 rounded mt-5">
                                <div className="flex flex-row gap-5">
                                    <div className="relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-indigo-900 rounded-full">
                                        <span className="font-medium text-white">{data.firstName.charAt(0).toUpperCase()}</span>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-xl text-indigo-900">{data.firstName} {data.lastName}</h1>
                                        <h1 className="text-s text-indigo-900">{data.phoneNumber}</h1>
                                        <h1 className="text-xs text-indigo-900">{data.email}</h1>
                                        <h1 className="text-xs text-indigo-900">{data.city}</h1>
                                    </div>
                                </div>
                                <div>
                                    <button 
                                    onClick={()=>handleDelete(data._id)}
                                    type="button" className="mt-5 focus:outline-none text-white bg-indigo-900 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-indigo-900">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Reports;
