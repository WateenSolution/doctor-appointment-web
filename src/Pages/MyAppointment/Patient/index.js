import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { AppContainer, AppHeading, UpcomAppPatCard } from "../../../components";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { getPatientAppointListAction } from "../../../redux/actions";
import { networkText } from "../../../utilities";
import { toast } from "react-toastify";
import { Row, Col } from "antd"; // Import Row and Col from Ant Design

const PatMyAppoinment = () => {
  const dispatch = useDispatch();
  const { patientAppList } = useSelector((state) => state?.appointment);
  console.log("patient app", patientAppList);

  useEffect(() => {
    getPatientAppData();
  }, []);

  const getPatientAppData = async () => {
    if (navigator.onLine) {
      const body = {
        onSuccess: async (res) => {},
        onFailure: (res) => {},
      };
      dispatch(getPatientAppointListAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const params = useParams();
  const id = params?.id || "";

  return (
    <AppContainer style={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <AppHeading
          title={"Upcoming Appointments"}
          titleFontWeight={800}
          dateCheck={true}
        />
        <Fade>
          {patientAppList && patientAppList?.data?.length > 0 ? (
            <Row gutter={[16, 16]} justify="start">
              {patientAppList.data.map((appointment) => (
                <Col xs={24} sm={12} lg={12} key={appointment.id}>
                  <UpcomAppPatCard
                    appointmentTime={appointment.appointment_time}
                    doctorName={appointment.doctor}
                    pendingMessage={appointment.notes}
                    calendar={appointment.updated_at}
                    profile={appointment.image}
                    fee={appointment.doctor_fee}
                    available={appointment.remote_inperson}
                    onClick={() =>
                      console.log(`Navigating to appointment ${appointment.id}`)
                    }
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </Fade>
      </Box>
    </AppContainer>
  );
};

export default PatMyAppoinment;
