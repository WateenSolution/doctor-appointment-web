import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { AppContainer, AppHeading } from "../../components";
import Box from "@mui/material/Box";
import { Card, Row, Col, Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { addRatingAction } from "../../redux/actions";

const Telemedicine = () => {
  const dispatch = useDispatch();

  // Static list of appointments
  const [appointments] = useState([
    {
      id: 1,
      doctorName: "Dr. John Smith",
      date: "2024-08-20",
      time: "10:00 AM",
      patientName: "Jane Doe",
      meetLink: "https://meet.google.com/example-link-1",
    },
    {
      id: 2,
      doctorName: "Dr. Alice Johnson",
      date: "2024-08-21",
      time: "02:00 PM",
      patientName: "Robert Brown",
      meetLink: "https://meet.google.com/example-link-2",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Davis",
      date: "2024-08-22",
      time: "09:30 AM",
      patientName: "Emily Wilson",
      meetLink: "https://meet.google.com/example-link-3",
    },
    {
      id: 4,
      doctorName: "Dr. abdullah",
      date: "2024-08-21",
      time: "09:35 AM",
      patientName: "Emily Wilson",
      meetLink: "https://meet.google.com/example-link-3",
    },
  ]);

  return (
    <AppContainer className="app-container">
      <Box sx={{ width: "100%" }}>
        <AppHeading
          title={"Upcoming Appointments"}
          titleFontWeight={800}
          dateCheck={true}
        />
        <Fade>
          <Row gutter={16} className="appointments-row">
            {appointments.map((appointment) => (
              <Col span={8} key={appointment.id}>
                <Card
                  className="appointment-card"
                  title={appointment.doctorName}
                  extra={
                    <Button
                      type="link"
                      icon={<PhoneOutlined />}
                      href={appointment.meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Call
                    </Button>
                  }
                >
                  <p>
                    <strong>Date:</strong> {appointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                  <p>
                    <strong>Patient:</strong> {appointment.patientName}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Fade>
      </Box>
    </AppContainer>
  );
};

export default Telemedicine;
