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
} from "../Pages";

export const My_Routes = {
  Public_Routes: [
    {
      path: "/ForgotPassword",
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
      path: "/appointment-form",
      component: <PatientAppointment />,
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
