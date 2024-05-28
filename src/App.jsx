import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import io from 'socket.io-client'; 
import { AllRoutes } from "./routes";
import Pages from './pages';
import './app.css';
import './index.css';
import store from "./store";
import "react-toastify/dist/ReactToastify.css";
import {socketEndpoint} from './config/environment'
import { PeerProvider } from './pages/provider/peer';
import SimpleMap from './map'
function AppContent() {
  const location = useLocation();
  const user = useSelector((state) => state?.auth?.user);

  useEffect(() => {
    const socket = io(`${socketEndpoint}`);
    socket.on("connect", () => {
      socket.emit("addUser", { userId: user._id });
    });
    return () => {
      socket.disconnect();
    };
  }, [user._id]);

  const hideNavbar = location.pathname === '/login' || 
    location.pathname === '/register' || 
    location.pathname === '/doctor/signup' ||
    location.pathname === '/patient/signup' || 
    location.pathname === '/doctor/dashboard' ||
    location.pathname === '/doctor/dashboard/appointments' ||
    location.pathname === '/chats' ||
    location.pathname === '/doctor/dashboard/reports';

  return (
    <>
      <ToastContainer
        style={{
          fontSize: "0.8rem",
          fontWeight: 700,
          zIndex: 999999999,
        }}
      />
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

function App() {
  return (
    <SimpleMap/>
    // <Provider store={store}>
    //   <PeerProvider>
    //   <AppContent />
    //   </PeerProvider>

    // </Provider>
  );
}

export default App;
