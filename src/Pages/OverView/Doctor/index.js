import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import {
  AppContainer,
  ProfileDocComp,
  AppHeading,
  OverviewCommonCard,
  PatientListCard,
} from "../../../components";
import { dashboard, DashboardDocImg, networkText } from "../../../utilities";
import Box from "@mui/material/Box";
import { Col, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  getDashboardDetailAction,
  getBookedPatientAction,
  availableTimeStatusAction,
} from "../../../redux/actions";
import { toast } from "react-toastify";

const DoctorDashboard = () => {
  const { dashboard, bookedPatient } = useSelector((state) => state.dashboard);
  const { statusAvailable } = useSelector((state) => state?.appointment);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getPatientDetail();
    getBookedPatientList();
  }, []);

  const addAvailableTime = async (doctor, appointmentTime, status, user_id) => {
    if (navigator.onLine) {
      const requestBody = {
        name: doctor,
        time: appointmentTime,
        status: status,
        user_id: user_id,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          toast.success("Status Successfully update");
          navigate("/");
        },
        onFailure: (error) => {
          toast.error(networkText);
        },
      };

      dispatch(availableTimeStatusAction(body));
    } else {
      toast.error(networkText);
    }
  };
  const getPatientDetail = async () => {
    if (navigator.onLine) {
      const body = {
        onSuccess: async (res) => {},
        onFailure: (res) => {},
      };

      dispatch(getDashboardDetailAction(body));
    } else {
      toast.error(networkText);
    }
  };
  const getBookedPatientList = async () => {
    if (navigator.onLine) {
      const body = {
        onSuccess: async (res) => {},
        onFailure: (res) => {},
      };

      dispatch(getBookedPatientAction(body));
    } else {
      toast.error(networkText);
    }
  };

  return (
    <AppContainer style={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <Row className="DoctorDashboard-container">
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={18}
            xl={18}
            className="DoctorContent-column"
          >
            <AppHeading
              title="Dashboard"
              titleFontWeight={800}
              dateCheck={true}
            />
            <Row className="DoctorContent-row">
              <Col span={14} className="DoctorContent-left">
                <div className="DoctorDashboard-content">
                  <h2 className="DoctorDashboard-title">
                    Welcome {dashboard?.getAllDoctorsDetails?.username}!
                  </h2>
                  <div className="DoctorDashboard-text">
                    <p className="DoctorDashboard-message1">
                      You have <strong>0</strong> patients remaining today!
                    </p>
                    <p className="DoctorDashboard-message">
                      Remember to check documentation before call.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={10} className="DoctorContent-right">
                <Fade direction="right" triggerOnce>
                  <img
                    src={DashboardDocImg}
                    alt="Dashboard"
                    className="DoctorDashboard-image"
                  />
                </Fade>
              </Col>
            </Row>
            <Row>
              <OverviewCommonCard bgColor="#F0F0F0">
                <div className="DoctorList-container">
                  {bookedPatient?.total_users?.length > 0 ? (
                    bookedPatient.total_users.map((patient, index) => (
                      <PatientListCard
                        key={patient.id} // Add a unique key for each card
                        lastName={patient.last_name}
                        firstName={patient.first_name}
                        image={patient.image}
                        note={patient.notes}
                        status={patient.status}
                        icoHeight={60}
                        icoWidth={60}
                        mT={20}
                        id={patient.id}
                        con_mT={10}
                        addAvailableTime={addAvailableTime}
                        doctor={patient.doctor}
                        appointmentTime={patient.appointment_time}
                        user_id={patient.user_id}
                      />
                    ))
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        color: "#888",
                        fontSize: "18px",
                        marginTop: "40px",
                        fontStyle: "italic",
                      }}
                    >
                      No card available
                    </p> // Show this message when no cards are available
                  )}
                </div>
              </OverviewCommonCard>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            className="DoctorProfile-column"
          >
            <ProfileDocComp
              profilePicture={dashboard?.getAllDoctorsDetails?.image}
              name={dashboard?.getAllDoctorsDetails?.username}
              phoneNumber={dashboard?.getAllDoctorsDetails?.phone_number}
              email={dashboard?.getAllDoctorsDetails?.email}
              rating={dashboard?.total_users[0]?.average_rating || 0}
              review={dashboard?.total_users[0]?.total_reviews || 0}
            />
          </Col>
        </Row>
      </Box>
    </AppContainer>
  );
};

export default DoctorDashboard;
