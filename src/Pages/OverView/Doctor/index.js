import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import {
  AppContainer,
  ProfileDocComp,
  AppHeading,
  OverviewCommonCard,
  OverviewCard1,
} from "../../../components";
import { DashboardDocImg, networkText } from "../../../utilities";
import Box from "@mui/material/Box";
import { Col, Row } from "antd";
import { getDashboardDetailAction } from "../../../redux/actions";
import { toast } from "react-toastify";

// Sample profile data
const profileData = {
  profilePicture: "https://via.placeholder.com/60", // Replace with actual profile picture URL
  title: "Doctor Profile",
  name: "Dr. John Doe",
  speciality: "Cardiologist",
};

const DashboardDoctor = () => {
  const { dashboard } = useSelector((state) => state?.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    getDoctorDetail();
  }, []);

  const getDoctorDetail = async (values) => {
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
  console.log("dashboard data", dashboard);
  return (
    <AppContainer style={{ position: "relative", backgroundColor: "blue" }}>
      <Box sx={{ width: "100%" }}>
        <Row className="Dashboard-container">
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={18}
            xl={18}
            className="Content-column"
            style={{ backgroundColor: "yellow" }}
          >
            <AppHeading
              title={"Dashboard"}
              titleFontWeight={800}
              dateCheck={true}
            />
            <Row className="Content-row" style={{ backgroundColor: "gray" }}>
              <Col
                span={16}
                className="Content-left"
                style={{ backgroundColor: "green" }}
              >
                <div className="Dashboard-content">
                  <h2 className="Dashboard-title">
                    Welcome {dashboard?.getAllDoctorsDetails?.username}!
                  </h2>
                  <p className="Dashboard-message">
                    You have <strong>0</strong> patients remaining today!
                  </p>
                </div>
              </Col>
              <Col
                span={8}
                className="Content-right"
                style={{ backgroundColor: "red" }}
              >
                <Fade direction="right" triggerOnce>
                  <img
                    src={DashboardDocImg}
                    alt="Dashboard"
                    className="Dashboard-image"
                  />
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                {/*   <OverviewCommonCard
                  title={"Today's Appoinments"}
                  bgColor={"#F0F0F0"}
                  titleFontSize={20}
                  titleFontWeight={800}
                  titleFontFamily={"Lato"}
                  titleLineHeight={"36px"}
                  titleLetterSpacing={0.25}
                >
                  <OverviewCard1
                    //iconSrc={installBaseIcon}
                    title={"Installed Base"}
                    value={"30"}
                    valUnit={"Kw"}
                    valFontSize={30}
                    icoWidth={80}
                    icoHeight={90}
                    valFontWeight={400}
                    mT={24}
                    con_mT={30}
                    con_mB={20}
                  />
                </OverviewCommonCard>*/}
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            className="Profile-column"
            style={{ backgroundColor: "blue" }}
          >
            <ProfileDocComp
              profilePicture={dashboard?.getAllDoctorsDetails?.image}
              title={profileData.title}
              name={profileData.name}
              speciality={profileData.speciality}
            />
          </Col>
        </Row>
      </Box>
    </AppContainer>
  );
};

export default DashboardDoctor;
