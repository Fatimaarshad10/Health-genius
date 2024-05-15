import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AllRoutes } from "./routes";
import Pages from './pages';
import './app.css'
import './index.css';
import store from "./store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DoctorRegister from './extraa'
function App() {
  const location = useLocation();

  // Check if the current path is for login or register
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/doctor/signup' ||
    location.pathname === '/patient/signup' || location.pathname === '/doctor/dashboard'
    || location.pathname === '/doctor/dashboard/appointments'
    || location.pathname === '/doctor/dashboard/chats' 
    || location.pathname === '/doctor/dashboard/reports';

  return (
    <>
    <ToastContainer
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                zIndex: 999999999,
              }}
            />
     <Provider store={store}>
      {!hideNavbar && <Pages.Navbar />}

      <Routes>
        {AllRoutes?.map((item, index) => (
          <Route
            key={index}
            path={item.path}
            element={item.page}
          ></Route>
        ))}
      </Routes>
      {!hideNavbar && <Pages.Footer />}
      </Provider>
      {/* <DoctorRegister/> */}
    </>
  );
}

export default App;
