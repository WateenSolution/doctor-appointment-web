import {
  AddAlarm,
  AddForm,
  Alarms,
  ChangePassword,
  EquipmentDetails,
  Equipments,
  Error,
  ForgotPassword,
  FormList,
  Login,
  Operations,
  OverviewPage,
  PageNotFound,
  ResetPassword,
  Settings,
  SiteDetails,
  Sites,
  Tickets,
  UpdateUser,
  ViewInduction,
  Vendor,
} from "../Pages";
import AddUser from "../Pages/AddUser";

import Users from "../Pages/Users";
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

  Super_Admin_Private_Routes: [
    {
      path: "/user",
      component: <Users />,
    },
    {
      path: "/add-user",
      component: <AddUser />,
    },
    {
      path: "/update-user",
      component: <UpdateUser />,
    },

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
      component: <Error />,
    },
  ],

  Admin_Private_Routes: [
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
  Site_MANAGER_Private_Routes: [
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
  OPS_MANAGER_Private_Routes: [
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
  Installer_Private_Routes: [
    {
      path: "/change-password",
      component: <ChangePassword />,
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
