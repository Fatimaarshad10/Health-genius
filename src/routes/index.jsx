import React from "react";
import Pages from "../pages";
import Login from "../components/login";
import DoctorRegister from "../components/doctor-signUp";
import PatientRegister from "../components/patient-signUp";
import Appointment from "../components/Dashboard/appointment";
import DashboardDetail from "../components/Dashboard/dashboard";
import Chats from "../components/Dashboard/chat";
import Reports from "../components/Dashboard/report";
import Roles from "../permissions";

export const AllRoutes = [
  {
    path: "/",
    page: <Pages.Home />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/register",
    page: <Pages.Register />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/login",
    page: <Login />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/doctor/signup",
    page: <DoctorRegister />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/patient/signup",
    page: <PatientRegister />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/about",
    page: <Pages.About />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/services",
    page: <Pages.Services />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/search-result",
    page: <Pages.MainSearch />,
    isPrivate: false,
    permissions: [],
  },
  {
    path: "/doctor/dashboard",
    page: <DashboardDetail />,
    isPrivate: true,
    permissions: [Roles.DOCTOR],
  },
  {
    path: "/doctor/dashboard/appointments",
    page: <Appointment />,
    isPrivate: true,
    permissions: [Roles.DOCTOR],
  },
  {
    path: "/chats",
    page: <Chats />,
    isPrivate: true,
    permissions: [Roles.DOCTOR, Roles.PATIENT],
  },
  {
    path: "/doctor/dashboard/reports",
    page: <Reports />,
    isPrivate: true,
    permissions: [Roles.DOCTOR],
  },
  {
    path: "/doctor/detail",
    page: <Pages.DoctorProfile />,
    isPrivate: true,
    permissions: [Roles.DOCTOR , Roles.PATIENT],
  },
  {
    path: "/patient/profile",
    page: <Pages.PatientProfile />,
    isPrivate: true,
    permissions: [Roles.PATIENT , Roles.DOCTOR],
  },
  {
    path: "/book/appointment",
    page: <Pages.BookAppointment />,
    isPrivate: true,
    permissions: [Roles.PATIENT],
  },
  {
    path: "/meeting/:room",
    page: <Pages.Meeting />,
    isPrivate: true,
    permissions: [Roles.DOCTOR, Roles.PATIENT],
  },
  {
    path: "/review/:token",
    page: <Pages.Review />,
    isPrivate: true,
    permissions: [Roles.PATIENT],
  },
];
