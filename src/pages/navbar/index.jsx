import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsync } from "../../store/reducers/auth.reducer";


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
]
const notifications = [
  { id: 1, text: "You have a new message!", isNew: true },
  { id: 2, text: "Your order has been shipped.", isNew: false },
  { id: 3, text: "You have a meeting at 3 PM.", isNew: true },
];


function Navbar() {
  const dispatch = useDispatch()

  const [isNotificationDialogOpen, setIsNotificationDialogOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const user = useSelector((state) => state?.auth?.user);
  const detail = useSelector((state) => state?.auth?.detail);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  const handleLogout = async () => {
    try {
      await dispatch(logoutAsync());
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  const handleClickOutside = (event) => {
    if (event.target.closest("#user-menu-button") || event.target.closest("#user-dropdown")) {
      return;
    }
    setIsUserMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div>
      <nav>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <h1 className="text-3xl text-indigo-900 font-bold mr-2">Health
              <span className="text-3xl font-bold text-black">Genius</span>
            </h1>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-indigo-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:text-gray-400 dark:hover:bg-indigo-700 dark:focus:ring-indigo-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">

            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-indigo-200 md:dark:bg-white dark:border-indigo-700">
              {navigation.map((item) => (
                <li key={item.name} >
                  <Link to={item.href} class="block py-2 px-3 mt-4 text-center  rounded  md:border-0  md:p-0  hover:text-indigo-400 text-indigo-900  " aria-current="page">{item.name}</Link>
                </li>
              ))}
              {Object.keys(user).length === 0 && (
                <li>
                  <div className="flex items-center gap-x-2 flex-col md:flex-row ">
                    <button
                      className="rounded-full md:bg-indigo-400 px-5 py-3 text-l font-semibold text-black 
                    hover:bg-indigo-50   dark:hover:text-indigo-300  "

                    >
                      <Link to='/login'>Sign In</Link>

                    </button>
                    <button
                      className="rounded-full md:bg-indigo-900 px-5 py-3 text-l font-semibold text-black md:text-white hover:bg-indigo-50   dark:hover:text-indigo-300  "
                    >
                      <Link to='/register'>Sign Up</Link>
                    </button>

                  </div>

                </li>
              )}
              {Object.keys(user).length !== 0 && (
                <>
                  <ul className="flex flex-col md:flex-row">
                    <li className="relative block py-2 px-3 mt-4 text-center rounded md:border-0 md:p-0 cursor-pointer">
                      <button
                        id="notification-button"
                        onClick={() => setIsNotificationDialogOpen(!isNotificationDialogOpen)}
                        type="button"
                      >
                        <svg className="w-6 h-6 hover:text-indigo-400 text-indigo-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z" />
                        </svg>
                      </button>
                      <div className={`${isNotificationDialogOpen ? 'block' : 'hidden'} absolute right-0 z-10 bg-white shadow-lg mt-2 p-4 rounded-lg w-64`}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Notifications</h3>
                        <div className="border-b border-gray-200 mb-2"></div>
                        {notifications.map(notification => (
                          <div key={notification.id} className={`p-2 rounded ${notification.isNew ? 'bg-blue-100' : ''}`}>
                            <p className="text-gray-700 text-sm">
                              {notification.isNew && <span className=" px-2 py-1 text-xs text-white bg-red-500 rounded-full">New</span>} {notification.text}</p>

                          </div>
                        ))}
                        <button onClick={() => setIsNotificationDialogOpen(false)} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                          Close
                        </button>
                      </div>
                    </li>
                  </ul>

                  <li class="block py-2 px-3 mt-3 text-center rounded   md:border-0  md:p-0  cursor-pointer flex items-center gap-x-2 flex-col md:flex-row  " aria-current="page">
                    <Link to='/chats'>
                      <svg class="w-6 h-6 hover:text-indigo-400 text-indigo-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                      </svg>
                    </Link>
                  </li>

                  <li className="block py-2 px-3 mt-2 text-center md:text-black rounded  md:p-0 flex items-center gap-x-2 flex-col md:flex-row  ">
                    <div className="relative">
                      <button
                        type="button"
                        className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900"
                        id="user-menu-button"
                        aria-expanded={isUserMenuOpen}
                        onClick={handleMenuToggle}
                      >
                        <span className="sr-only">Open user menu</span>
                        {detail?.image ? (
                          <>
                            <img className="w-10 h-10 rounded-full object-cover" src={user?.image} alt="user photo" />

                          </>
                        ) : (
                          <>
                            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-indigo-900 rounded-full ">
                              <span class="font-medium text-white ">{detail?.first_name.charAt(0).toUpperCase()}</span>
                            </div>
                          </>
                        )}

                      </button>
                      <div className={`${isUserMenuOpen ? 'block' : 'hidden'} absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`} id="user-dropdown">
                        <div className="py-1">
                          <div className="px-4 py-2 text-m text-indigo-400 uppercase font-bold">{detail?.first_name}</div>
                          <div className="px-4 py-2 text-sm text-gray-500 truncate">{user?.email}</div>
                          <div className="border-t border-gray-200"></div>
                          <ul className="py-2">
                            {user?.role === "patient" ? (
                              <li>
                                <Link to="/patient/profile" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-indigo-200 dark:hover:text-white">Profile</Link>
                              </li>
                            ) : (
                              <li>
                                <Link to="/doctor/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-indigo-200 dark:hover:text-white">Dashboard</Link>
                              </li>
                            )}
                            <li>
                              <button onClick={handleLogout}>
                                <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-indigo-200 dark:hover:text-white" >Sign out</Link>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </>

              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
