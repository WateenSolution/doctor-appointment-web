import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { AppContainer, AppHeading, UpcomAppDocCard } from "../../../components";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { getDoctorAppointListAction } from "../../../redux/actions";
import { networkText } from "../../../utilities";
import { toast } from "react-toastify";
import { Row, Col } from "antd"; // Import Row and Col from Ant Design

const DocMyAppoinment = () => {
  const dispatch = useDispatch();
  const { DoctorAppList } = useSelector((state) => state?.appointment);

  useEffect(() => {
    getPatientAppData();
  }, []);

  const getPatientAppData = async () => {
    if (navigator.onLine) {
      const body = {
        onSuccess: async (res) => {},
        onFailure: (res) => {},
      };
      dispatch(getDoctorAppointListAction(body));
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
          {DoctorAppList && DoctorAppList?.data?.length > 0 ? (
            <Row gutter={[16, 16]} justify="start">
              {DoctorAppList.data.map((appointment) => (
                <Col xs={24} sm={12} lg={12} key={appointment.id}>
                  <UpcomAppDocCard
                    firstName={appointment.first_name}
                    lastName={appointment.last_name}
                    appointmentTime={appointment.appointment_time}
                    pendingMessage={appointment.notes}
                    calendar={appointment.updated_at}
                    profile={appointment.image}
                    fee={appointment.doctor_fee}
                    available={appointment.remote_inperson}
                    status={appointment.status}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <p>No upcoming appointments.</p>
          )}
          <p
            style={{ marginTop: "30px", textAlign: "center", fontWeight: 700 }}
          >
            Go to the Dashboard to approve the requests if any.
          </p>
        </Fade>
      </Box>
    </AppContainer>
  );
};

export default DocMyAppoinment;
