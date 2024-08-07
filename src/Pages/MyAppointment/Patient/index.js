import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { AppContainer, AppHeading, UpcomAppPatCard } from "../../../components";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import {
  getPatientAppointListAction,
  addRatingAction,
} from "../../../redux/actions";
import { networkText } from "../../../utilities";
import { toast } from "react-toastify";
import { Row, Col } from "antd"; // Import Row and Col from Ant Design

const PatMyAppoinment = () => {
  const dispatch = useDispatch();
  const { patientAppList, doctRating } = useSelector(
    (state) => state?.appointment
  );

  useEffect(() => {
    getPatientAppData();
  }, []);
  const addDocRating = async (
    user_id,
    firstName,
    lastName,
    doctorName,
    appointmentTime,
    value,
    ratingState
  ) => {
    if (navigator.onLine) {
      const requestBody = {
        user_id: user_id,
        first_name: firstName,
        last_name: lastName,
        doctor: doctorName,
        appointment_time: appointmentTime,
        doc_rating: value,
        rating_status: ratingState,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          toast.success("Rate added Successfully ");
        },
        onFailure: (error) => {
          toast.error(networkText);
        },
      };

      dispatch(addRatingAction(body));
    } else {
      toast.error(networkText);
    }
  };
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
                    user_id={appointment.user_id}
                    firstName={appointment.first_name}
                    lastName={appointment.last_name}
                    appointmentTime={appointment.appointment_time}
                    doctorName={appointment.doctor}
                    pendingMessage={appointment.notes}
                    calendar={appointment.updated_at}
                    profile={appointment.image}
                    fee={appointment.doctor_fee}
                    available={appointment.remote_inperson}
                    addDocRating={addDocRating}
                    status={appointment.status}
                    docRating={appointment.doc_rating}
                    ratingState={appointment.rating_status}
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
