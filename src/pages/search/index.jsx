import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { searchDoctor, getDoctor } from '../../apis/doctor'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Search() {
    const [city, setCity] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [specialist, setSpecialist] = useState("");
    const [location, setLocation] = useState(null)



    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 30.3753,  // Centering the map around Pakistan
        lng: 69.3451,
    };


    const navigate = useNavigate();

    const specialistList = [
        { name: "cardiologist", description: "Specialist in heart-related issues" },
        { name: "dermatologist", description: "Skin specialist" },
        { name: "pediatrician", description: "Doctor for children" },
    ];

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const queryString = `?city=${city}&specialist=${specialist}`;
            const response = await searchDoctor(queryString);
            setSearchResults(response);
            navigate("/search-result", { state: { specialist, city, response } });
        } catch (error) {
            alert(error.message);
        }
    };
    const handleInputChange = (event) => {
        const { value } = event.target;
        setSpecialist(value);

        // Filter specialist list based on user input
        const filteredSuggestions = specialistList.filter((specialist) =>
            specialist.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await getDoctor();
                setLocation(response.data.Doctor)
            } catch (error) {
                alert(error.message);
            }
        };
        handleData()
    }, [])
    return (
        <>
            <div className="flex items-center mt-5">
                <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center ml-10">
                    <span className="text-white text-4xl font-serif font-bold">G</span>
                </div>
                <div>
                    <span className="text-3xl font-medium ml-6">Hello, Guest!</span>
                </div>
            </div>
            <div className="mt-5 ml-8">

                <form class="max-w-lg mx-auto" onSubmit={handleSearch}>
                    <LoadScript googleMapsApiKey="AIzaSyBnV3N5F0o9jcOG_vkX8u2Q4PvQG326jsw">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={5}
                        >
                            {location?.map((location) => (
                                <Marker
                                    key={location.city}
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    label={location.city.charAt(0).toUpperCase() + location.city.slice(1)}  // Capitalize the first letter of the label
                                />
                            ))}
                        </GoogleMap>
                    </LoadScript>
                    <div class="flex mt-5">
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
                            <input
                                type="search"
                                value={specialist}
                                onChange={handleInputChange}
                                name="specialist"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-indigo-400 focus:border-indigo-400 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-900"
                                placeholder="Search"
                                required
                            />
                            {/* Display suggestions */}
                            {suggestions.length > 0 && (
                                <ul className="absolute z-50 mt-1 bg-white border border-gray-300 rounded-md w-full">
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

                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-indigo-900 rounded-e-lg border hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 dark:focus:ring-indigo-900">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="px-6  lg:px-8  ml-10 mr-10 mt-5">
                <main className="grid lg:grid-cols-2 gap-10">
                    <div className="main pt-20">
                        <p className="text-2xl leading-relaxed text-gray-900 my-4 mx-8 uppercase">
                            Expert medical treatment
                        </p>
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold">We Follow a holistic approach to health care. </h1>
                        </div>
                        <p className="text-md leading-relaxed text-gray-900 my-8">
                            Bringing healthcare to your fingertips: Your vital gateway to medical experties and care.
                        </p>
                        <div className="flex">
                            <div className="flex items-center gap-x-3  md:flex-row ">
                                <button
                                    className=" rounded-md bg-indigo-900 px-5 py-3 text-xl font-semibold text-white shadow-sm hover:border-2 hover:bg-white hover:text-indigo-900
               hover:border-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900 mr-4"
                                >
                                    <Link to="/book/appointment"> Book an appointment</Link>

                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="/assets/img/main-1.png" className="h-auto w-90 lg:w-90" alt="doctor_img" />
                    </div>
                </main>
            </div>
        </>
    )
}
export default Search