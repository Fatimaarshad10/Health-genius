import React from "react";
import Pages from "../pages";
import Login from "../components/login";
import DoctorRegister from "../components/doctor-signUp";
import PatientRegister from "../components/patient-signUp";
export const AllRoutes = [
  {
    path: "/",
    page: <Pages.Home />,
  },
  {
    path: "/register",
    page: <Pages.Register />,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/doctor/signup",
    page: <DoctorRegister />,
  },
  {
    path: "/patient/signup",
    page: <PatientRegister />,
  },
  {
    path: "/about",
    page: <Pages.About />,
  },
  {
    path: "/services",
    page: <Pages.Services />,
  },
  {
    path: "/search-result",
    page: <Pages.MainSearch />,
  },
  {
    path: "/doctor/dashboard",
    page: <Pages.Dashboard />,
  },
  {
    path: "/doctor/detail",
    page: <Pages.DoctorProfile />,
  },
];
