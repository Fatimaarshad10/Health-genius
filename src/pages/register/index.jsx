import { Link } from "react-router-dom";

function Register() {
    return (
        <>
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-black text-left">Welcome to<br /> <span className="text-indigo-900">Health</span> Genius</h1>
                <h1 className="font-bold text-lg text-left mt-4">New here!</h1>
                <p className="text-md text-left">Please click on the section that pertains to you in<br/> order to sign up.</p>
                <div className="mt-5 flex flex-col lg:flex-row items-center justify-center">
                    <button className="bg-indigo-900 hover:bg-indigo-400 text-white text-lg font-bold py-4 px-6 rounded-xl mb-4 lg:mb-0 lg:mr-8">
                        <Link to="/patient/signup">Client</Link>
                    </button>
                    <button className="bg-indigo-900 hover:bg-indigo-400 text-white text-lg font-bold py-4 px-6 rounded-xl ml-0 lg:ml-8">
                        <Link to="/doctor/signup">Doctor</Link>
                    </button>
                </div>
            </div>
        </div>
    </>
    
    )
}
export default Register