import React, { useState, useEffect } from "react"
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { searchDoctor, searchReview } from "../../apis/doctor";
import { setSearchCriteria } from "../../store/slices/count.auth"
import RatingReview from '../../data'
import { useDispatch , useSelector } from "react-redux";

function MainSearch() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const specialistOptions = [
        { name: "dermatologist", description: "Skin specialist" },
        { name: "gynecologist", description: "Specialist in women's reproductive health" },
        { name: "psychiatrist", description: "Specialist in mental health disorders" }
    ];

    const [rating, setRating] = useState(0);
    const [totalReview, setTotalReview] = useState(0);
    const [specialist, setSpecialist] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const searchData = useSelector((state) => state.count);


    const [searchQuery, setSearchQuery] = useState(searchData.specialist);
    const [city, setCity] = useState(searchData.city);
    const [searchResults, setSearchResults] = useState(searchData.response);
    // Search for doctor
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const queryString = `?city=${city}&specialist=${searchQuery}`;
            const response = await searchDoctor(queryString);
            setSearchResults(response);
            dispatch(setSearchCriteria({ city, specialist: searchQuery }));

        } catch (error) {
            alert(error.message);
        }
    };
    // Post : Get the doctor details 
    const handleDoctor = async (data) => {
        navigate("/doctor/detail", { state: { doctor: data } });

    }
    const handleRating = async (doctorId) => {
        try {
            const response = await searchReview(doctorId);
            setRating(response.data.averageRating);
            setTotalReview(response.data.totalReviews)
        } catch (error) {
            console.error(error);
            setRating(0);
        }
    }

    useEffect(() => {
        // Fetch average rating for each doctor in searchResults
        searchResults?.data?.Doctor?.forEach(doctor => {
            handleRating(doctor._id);
        });
    }, [searchResults]);
    

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSpecialist(value);

        // Filter specialist list based on user input
        const filteredSuggestions = specialistOptions.filter((specialist) =>
            specialist.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    return (
        <>
            <div>
                <h1 className="text-4xl mt-10 ml-20">Top results for your search ({searchQuery})</h1>
            </div>
            {/* Pre :  Every button will have a functionality */}
            <div className="flex items-center gap-x-5 flex-col md:flex-row mt-10 ml-20 ">
                <form class="max-w-lg " onSubmit={handleSearch}>
                    <div class="flex">
                        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900  dark:text-white"></label>
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)} class="flex-shrink-0 z-10 inline-flex items-center  py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">

                            <option value="">

                                Enter City<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </option>
                            <option value="Faisalabad">Faisalabad</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                        </select>

                        <div class="relative w-full">
                            <input type="search"
                            value={specialist}
                            onChange={handleInputChange}
                               
                                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-indigo-400 focus:border-indigo-400 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-900" placeholder="Search" required />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-indigo-900 rounded-e-lg border hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 dark:focus:ring-indigo-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>

                            

                    </div>
                    {/* Display suggestions */}
                    {suggestions.length > 0 && (
                                <ul className="absolute z-50 mt-1 bg-white border border-gray-300 rounded-md w-50">
                                    {suggestions.map((specialist, index) => (
                                        <li
                                            key={index}
                                            className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setSpecialist(specialist.name)}
                                        >
                                            {specialist.name} - {specialist.description}
                                        </li>
                                    ))}
                                </ul>
                            )}
                </form>
                <button
                    className="rounded md:bg-indigo-400 font-semibold text-black 
                    hover:bg-indigo-50 dark:hover:text-indigo-300 p-2"
                >
                    Clear filters
                </button>
                <button
                    className="rounded md:bg-indigo-900 p-2 font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                >
                    Fee upto 500
                </button>
                <button
                    className="rounded md:bg-indigo-900 p-2 font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                >
                    DR. near me
                </button>
                <button
                    className="rounded md:bg-indigo-900 p-2  font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                >
                    Top rated
                </button>
                <div className=" lg:w-30">
                    <select id="field of expertise" className="rounded p-2 md:bg-indigo-900  font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300 ">
                        <option value="" disabled selected>Choose Time</option>
                        <option value="1">Field 1</option>
                        <option value="2">Field 2</option>
                        <option value="3">Field 3</option>
                    </select>
                </div>
                <div className="lg:w-30">
                    <select id="field of expertise" className="rounded p-2 md:bg-indigo-900  font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300 ">
                        <option value="" disabled selected>Fee Range</option>
                        <option value="1">Field 1</option>
                        <option value="2">Field 2</option>
                        <option value="3">Field 3</option>
                    </select>
                </div>
            </div>
            <div>
                {/* Pre : Here i will add the map where show the list of doctor according to the search */}

                <div class="bg-white border border-gray-200 rounded-lg mt-10 ml-20 mr-20 p-10">
                    {searchResults?.data?.Doctor?.map((data) =>
                        <>
                            <button onClick={() => handleDoctor(data)} className="text-left">

                                <div className="flex lg-flex-row " key={data._id}>
                                    <div>
                                        <img class="rounded-full object-cover w-40 h-40" src={data.image} alt="" />
                                    </div>
                                    <div className="lg:w-30 mr-10 ml-10">
                                        <h2 className="text-indigo-900 font-bold text-3xl hover:text-blue-900">
                                            {data.first_name.charAt(0).toUpperCase() + data.first_name.slice(1)}{" "}
                                            {data.last_name.charAt(0).toUpperCase() + data.last_name.slice(1)}
                                        </h2>
                                        <div className="">
                                            <RatingReview rating={rating} setRating={setRating} />

                                        </div>
                                        <p className="font-bold">{data.specialist}</p>
                                        <p className="text-sm w-60">{data.medical_degree} {data.hospital_affiliation}</p>
                                        <div className="flex lg:flex-row gap-5 mt-10">
                                            {/* Experience */}

                                            <div className="">
                                                <h2 className="text-indigo-900 font-bold ">Experience</h2>
                                                <p>{data.experience} Year</p>
                                            </div>
                                            {/* review */}

                                            <div className="">
                                                <h2 className="text-indigo-900 font-bold ">Review</h2>
                                                <p>{totalReview}</p>
                                            </div>
                                            {/* Satisfaction */}
                                            <div className="">
                                                <h2 className="text-indigo-900 font-bold ">Satisfaction</h2>
                                                <p>{rating}</p>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="flex lg:flex-row gap-5 ">
                                        <button
                                            className="rounded md:bg-indigo-900 w-60 h-20 text-l font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                                        >
                                            Video Call
                                        </button>
                                        <button
                                            className="rounded md:bg-indigo-900 w-60 h-20 text-l font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                                        >
                                            View Timings
                                        </button>
                                    </div>

                                </div>
                                <div className="flex lg-flex-row gap-10 mt-10 justify-center">
                                    {/* Card no 1  */}
                                    <div className="border border-gray-200 p-5">
                                        <h2 className="text-indigo-900 text-2xl">Video consultation</h2>
                                        <p>Available today</p>
                                        <p className="mt-5">Rs. 1000</p>
                                    </div>
                                    {/* Card no 2  */}
                                    <div className="border border-gray-200 p-5">
                                        <h2 className="text-indigo-900 text-2xl">Nishtar Hospital, Multan</h2>
                                        <p>Available today</p>
                                        <p className="mt-5">Free</p>
                                    </div>
                                    {/* Card no 3  */}
                                    <div className="border border-gray-200 p-5">
                                        <h2 className="text-indigo-900 text-2xl">City Hospital, Multan</h2>
                                        <p>Available tomorrow</p>
                                        <p className="mt-5">Rs. 3000</p>
                                    </div>
                                </div>
                            </button>

                        </>)}
                </div>

            </div>
        </>
    )
}

export default MainSearch