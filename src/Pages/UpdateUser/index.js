import { Col, Row } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppHeading, AddUserComp, UpdateUserComp } from "../../components";
import {
  addUserAction,
  getAllSitesAction,
  getOrgAction,
  getOrganizationalSitesAction,
  getUserDetAction,
  updateUserAction,
} from "../../redux/actions";
import { networkText } from "../../utilities";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";

const UpdateUser = ({ navigation }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(null);
  const { sites } = useSelector((state) => state?.sites);
  const [showData, setShowData] = useState(false);
  const userData = location?.state?.data;
  const formikRef = useRef(null);
  const [rowSelectionModel, setRowSelectionModel] = useState(
    userData?.user_stations?.split(",").map(Number) || []
  );
  const { organizations } = useSelector((state) => state?.inductions);

  console.log(userData);
  useEffect(() => {
    getAllOrganizations();
    getOrganizationalSites();
  }, []);

  const getAllSites = () => {
    if (navigator.onLine) {
      const requestBody = {
        values: null,
        onSuccess: (res) => {
          setShowData(true);
        },
        onFailure: () => {},
      };
      dispatch(getAllSitesAction(requestBody));
    } else {
      toast.error(networkText);
    }
  };

  const getAllOrganizations = () => {
    if (navigator.onLine) {
      const requestBody = {
        values: null,
        onSuccess: (res) => {
          setShowData(true);
        },
        onFailure: () => {},
      };
      dispatch(getOrgAction(requestBody));
    } else {
      toast.error(networkText);
    }
  };

  const getOrganizationalSites = (Organization = null) => {
    if (navigator.onLine) {
      const requestBody = {
        organization: Organization || userData?.station_name,
      };

      const body = {
        values: requestBody,
        onSuccess: async (res) => {
          if (res) {
          }
        },
        onFailure: (error) => {},
      };

      dispatch(getOrganizationalSitesAction(body));
    } else {
      toast.error(networkText);
    }
  };

  const onUpdate = async (values) => {
    const requestBody = {
      user_id: userData?.id,
      email: values?.email,
      username: values?.username,
      password: values?.password,
      station_name: values?.siteName,
      role_name: values?.role,
      stations: rowSelectionModel || null,
    };

    const body = {
      values: requestBody,
      onSuccess: async (res) => {
        if (res) {
          navigate("/user");
        }
      },
      onFailure: (error) => {},
    };

    dispatch(updateUserAction(body));
  };

  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Col>
        <AppHeading title={"Update User"} />
        <Row className="rowCard" gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {showData && (
              <UpdateUserComp
                formikRef={formikRef}
                onSubmit={(values) => {
                  onUpdate(values);
                }}
                sites={sites && sites?.map((entry) => entry.station_name)}
                data={userData || null}
                allSites={sites}
                getOrganizationalSites={getOrganizationalSites}
                organizations={
                  organizations && organizations?.map((entry) => entry.name)
                }
                setSelectedRows={(item) => setRowSelectionModel(item)}
                selectedRows={rowSelectionModel}
              />
            )}
          </Col>
        </Row>
      </Col>
    </Box>
  );
};

export default UpdateUser;
