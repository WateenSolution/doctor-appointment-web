import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import {
  AppContainer,
  ProfilePatComp,
  AppHeading,
  OverviewCommonCard,
  DoctorListCard,
} from "../../../components";
import { dashboard, DashboardPatImg, networkText } from "../../../utilities";
import Box from "@mui/material/Box";
import { Col, Row } from "antd";
import {
  getDashboardDetailAction,
  getFilterOrAllDoc,
} from "../../../redux/actions";
import { toast } from "react-toastify";
import { Select } from "antd";

const { Option } = Select;

const DashboardPatient = () => {
  const { dashboard, filterOrDocDetail } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getPatientDetail();
    filterOfAllData();
  }, []);

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

  const filterOfAllData = async (value) => {
    if (navigator.onLine) {
      const requestBody = {
        qualification_specialisation:
          value?.qualification_specialisation || null,
      };
      const body = {
        values: requestBody,
        onSuccess: async (res) => {},
        onFailure: (error) => {},
      };

      dispatch(getFilterOrAllDoc(body));
    } else {
      toast.error(networkText);
    }
  };

  const handleFilterChange = (value) => {
    filterOfAllData({ qualification_specialisation: value });
  };

  return (
    <AppContainer style={{ position: "relative" }}>
      <Box sx={{ width: "100%" }}>
        <Row className="PatientDashboard-container">
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={18}
            xl={18}
            className="PatientContent-column"
          >
            <AppHeading
              title="Dashboard"
              titleFontWeight={800}
              dateCheck={true}
            />
            <Row className="PatientContent-row">
              <Col span={14} className="PatientContent-left">
                <div className="PatientDashboard-content">
                  <h2 className="PatientDashboard-title">
                    Welcome {dashboard?.getAllDoctorsDetails?.username}!
                  </h2>
                  <div className="PatientDashboard-text">
                    <p className="PatientDashboard-message1">
                      Need to see a doctor?
                    </p>
                    <p className="PatientDashboard-message">
                      Book your appointment in a few clicks.
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={10} className="PatientContent-right">
                <Fade direction="right" triggerOnce>
                  <img
                    src={DashboardPatImg}
                    alt="Dashboard"
                    className="PatientDashboard-image"
                  />
                </Fade>
              </Col>
            </Row>

            <Row>
              <OverviewCommonCard bgColor="#F0F0F0">
                <Col span={24}>
                  <Select
                    placeholder="Filter by Specialization"
                    onChange={handleFilterChange}
                    style={{ width: "100%", marginBottom: "10px" }}
                  >
                    <Option value="Cardiology">Cardiology</Option>
                    <Option value="Dermatology">Dermatology</Option>
                    <Option value="Neurology">Orthopedics</Option>
                    <Option value="Pediatrics">Pediatrics</Option>

                    {/* Add more options as needed */}
                  </Select>
                </Col>
                <div className="doctor-list-container">
                  {filterOrDocDetail?.getAllFilterDoc?.map((doctor, index) => (
                    <DoctorListCard
                      key={index}
                      title={doctor.username}
                      iconSrc={doctor.image}
                      value={doctor.qualification_specialisation}
                      valUnit="Speciality"
                      icoHeight={60}
                      icoWidth={60}
                      mT={20}
                      id={doctor.id}
                      con_mT={10}
                      rating={doctor.average_rating}
                      description={doctor.about}
                      totalReviews={doctor.total_reviews}
                      perUsername={dashboard?.getAllDoctorsDetails?.username}
                    />
                  ))}
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
            className="PatientProfile-column"
          >
            <ProfilePatComp
              profilePicture={dashboard?.getAllDoctorsDetails?.image}
              name={dashboard?.getAllDoctorsDetails?.username}
              phoneNumber={dashboard?.getAllDoctorsDetails?.phone_number}
              email={dashboard?.getAllDoctorsDetails?.email}
            />
          </Col>
        </Row>
      </Box>
    </AppContainer>
  );
};

export default DashboardPatient;
