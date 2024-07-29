import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Sidenav from "../components/SideNav/Sidenav";
import { My_Routes } from "./RoutesArray";
import { useSelector } from "react-redux";

const RouteConfig = () => {
  const isLogin = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state?.auth);

  useEffect(() => {
    const redirect = My_Routes.Public_Routes.find(
      (element) => element?.path === location?.pathname
    );
    if (redirect && isLogin) {
      navigate("/");
    }
  }, [location?.pathname]);

  const switchArrays = (role) => {
    switch (role) {
      case "Patient":
        return My_Routes.Patient_Private_Routes;
      case "Doctor":
        return My_Routes.Doctor_Private_Routes;
      default:
        return My_Routes.Client_Private_Routes;
    }
  };

  return (
    <Routes>
      {My_Routes.Public_Routes.map((comp, index) => (
        <Route key={index} path={comp.path} element={comp.component} />
      ))}

      {switchArrays(userInfo?.user?.role)?.map((comp, index) => (
        <Route
          key={index}
          path={comp.path}
          element={
            <RequireAuth>
              <Sidenav>{comp.component}</Sidenav>
            </RequireAuth>
          }
        />
      ))}
    </Routes>
  );
};

export default RouteConfig;

function RequireAuth({ children }) {
  const isLogin = localStorage.getItem("token");

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
