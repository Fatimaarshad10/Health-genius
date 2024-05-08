import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AllRoutes } from "./routes";
import Pages from './pages';
import './app.css'
import './index.css';

function App() {
  const location = useLocation();

  // Check if the current path is for login or register
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/doctor/signup' ||
  location.pathname === '/patient/signup';

  return (
    <>
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
      
    </>
  );
}

export default App;
