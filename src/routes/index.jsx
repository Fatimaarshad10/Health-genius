import React from "react";
import Pages from "../pages";
import Login from "../components/login";
import DoctorRegister from "../components/doctor-signUp";
import PatientRegister from "../components/patient-signUp";
import Appointment from "../components/Dashboard/appointment";
import DashboardDetail from "../components/Dashboard/dashboard";
import Chats from "../components/Dashboard/chat";
import Reports from "../components/Dashboard/report";
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
    page: <DashboardDetail/>,
  },
  {
    path: "/doctor/dashboard/appointments",
    page: <Appointment />,
  },
  {
    path: "/chats",
    page: <Chats />,
  },
  {
    path: "/doctor/dashboard/reports",
    page: <Reports />,
  },
  {
    path: "/doctor/detail",
    page: <Pages.DoctorProfile />,
  },
  {
    path: "/patient/profile",
    page: <Pages.PatientProfile />,
  },
  {
    path: "/patient/create/report",
    page: <Pages.Model/>,
  },
];
