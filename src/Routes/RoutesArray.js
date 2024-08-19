import {
  ChangePassword,
  DashboardDoctor,
  Error,
  ForgotPassword,
  Login,
  PageNotFound,
  ResetPassword,
  DashboardPatient,
  PatientAppointment,
  PatientMyAppoint,
  DoctorMyAppoint,
  Chat,
  Payment,
  Telemedicine,
} from "../Pages";

export const My_Routes = {
  Public_Routes: [
    {
      path: "/sign-up",
      component: <ForgotPassword />,
    },
    {
      path: "/login",
      component: <Login />,
    },
    {
      path: "/reset-password/:id",
      component: <ResetPassword />,
    },
    {
      path: "*",
      component: <PageNotFound />,
    },
  ],

  Doctor_Private_Routes: [
    {
      path: "/change-password",
      component: <ChangePassword />,
    },
    {
      path: "*",
      component: <PageNotFound />,
    },
    {
      path: "/error-page",
      component: <Error />,
    },
    {
      path: "/",
      component: <DashboardDoctor />,
    },
    {
      path: "/my-appointment",
      component: <DoctorMyAppoint />,
    },
    {
      path: "/live-chat",
      component: <Chat />,
    },
    {
      path: "/telemedicine",
      component: <Telemedicine />,
    },
  ],

  Patient_Private_Routes: [
    {
      path: "/change-password",
      component: <ChangePassword />,
    },
    {
      path: "*",
      component: <PageNotFound />,
    },
    {
      path: "/error-page",
      component: <Error />,
    },
    {
      path: "/",
      component: <DashboardPatient />,
    },
    {
      path: "/appointment-form/:id",
      component: <PatientAppointment />,
    },
    {
      path: "/appointment-form",
      component: <PatientAppointment />,
    },
    {
      path: "/live-chat",
      component: <Chat />,
    },
    {
      path: "/my-appointment",
      component: <PatientMyAppoint />,
    },
    {
      path: "/payment-billing",
      component: <Payment />,
    },
    {
      path: "/telemedicine",
      component: <Telemedicine />,
    },
  ],

  Client_Private_Routes: [
    {
      path: "/change-password",
      component: <ChangePassword />,
    },
    {
      path: "*",
      component: <PageNotFound />,
    },
    {
      path: "/error-page",
      component: <Error />,
    },
  ],
};
