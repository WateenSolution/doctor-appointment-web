import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { AppContainer, AppHeading } from "../../components";
import PatientAppointmentForm from "../PatientAppointment/AppointmentForm"; // Import the form component
import Box from "@mui/material/Box";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Appoinment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getPatientDetail();
  }, []);
  const params = useParams();
  const id = params?.id || "";

  return (
    <AppContainer style={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <AppHeading
          title={"Patient Appointment Form"}
          titleFontWeight={800}
          dateCheck={true}
        />
        <PatientAppointmentForm id={id} />
      </Box>
    </AppContainer>
  );
};

export default Appoinment;
