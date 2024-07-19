import { Col, Row } from "antd";
import { Form, Formik } from "formik";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { AppInput, CommonCard, ContactCard, InputBox } from "../../components";
import {
  ContactUsVS,
  contactUsFormFields,
  contactUsImage,
} from "../../utilities";

export const ContactFormCard = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={contactUsFormFields}
      validationSchema={ContactUsVS}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);

        resetForm({
          values: {
            subject: "",
            message: "",
          },
        });
      }}
    >
      {({ errors, status, touched, handleSubmit, setFieldValue, values }) => {
        return (
          <Form className="Auth-form" onSubmit={handleSubmit}>
            <CommonCard
              title={"Get in touch with us"}
              buttonTitle={"Submit"}
              onClick={handleSubmit}
            >
              <Row gutter={[40, 70]} style={{ marginTop: 50 }}>
                {/* Col 1 */}
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <AppInput
                    label={"Subject"}
                    vldName={"subject"}
                    placeholder={"Enter Subject"}
                  />

                  <InputBox
                    label={"Message"}
                    vldName={"message"}
                    placeholder={"Enter Message"}
                  />
                </Col>

                {/* Col 2 */}
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <ContactCard
                      title={"Location"}
                      desc={
                        "Head Office: Main Walton Road, Opp. Bab-e-Pakistan, Walton Cantt, Lahore."
                      }
                      icon={
                        <LocationOnIcon size={15} style={{ color: "white" }} />
                      }
                    />
                    <ContactCard
                      mT={10}
                      title={"Email"}
                      desc={"Energy.Support@wateen.com"}
                      icon={<MailIcon size={15} style={{ color: "white" }} />}
                    />
                    <ContactCard
                      mT={10}
                      title={"Call"}
                      desc={"UAN: 042-111-365-111"}
                      icon={<PhoneIcon size={15} style={{ color: "white" }} />}
                    />
                  </Col>
                </Col>
              </Row>
            </CommonCard>
          </Form>
        );
      }}
    </Formik>
  );
};
